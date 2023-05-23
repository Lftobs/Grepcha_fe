import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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
  
  constructor(private router: Router, private auth: AuthService, private cookies: CookieService) { }
    
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
		  //console.log(res.header.Set-cookies, 'cook')
		  localStorage.setItem('token', this.cookies.get('token'))
		  console.log(this.cookies.get('token'), 'to')
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