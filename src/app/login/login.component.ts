import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router'

/*type IsError = {
    username: String || null,
    password: String || null
}*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data = {
      username: '',
      password: ''
  }
  pwd: any
  error = {
      username: '',
      password: '',
      pwdErr: ''
  }
  
  constructor(private router: Router, private auth: AuthService){}
    
  ngOnInit(): void {
      
  }
  
  signIn(): any {
      if (!/^.{5,}$/.test(this.data.username)){
          this.error.username = 'Invalid username'
	  return this.error.username
      } else {
          this.error.username = ''
      }
      if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(this.data.password)) {
          this.error.password= 'Invalid Password'
	  return this.error.password
      } else {
          this.error.password = ''
      }

      this.auth.signIn(this.data)
	.subscribe(
	    {
		next: res => {
		  console.log(res)
		  localStorage.setItem('isAuth', 'true')
		  this.router.navigate(['/'])
		},

		error: (e) => console.log(e)
	    }
	    
	)
      
      
  }


  signUp(): any{
     if (!/^.{5,}$/.test(this.data.username)){
         this.error.username = 'Invalid username'
	 return this.error.username
     } else { this.error.username='' }

     if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(this.data.password)) {
         this.error.password= 'Invalid Password'
	 return this.error.password
     } else { this.error.password = '' }
     if (this.data.password != this.pwd){
     	this.error.pwdErr = 'Password does not match'
	return this.error.pwdErr
     } else { this.error.pwdErr = '' }

     this.auth.signUp(this.data)
       .subscribe(
	  {
	      next: res => {
	          console.log(res)
		  this.router.navigate(['log-in'])
	      },

	      error: (e) => console.log(e)
	  }
	  
       )
  }

}