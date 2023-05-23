import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  data = {
    username: '',
    password: '',
  }
  pwd = '';

  error = {
    username: '',
    password: '',
    pwdErr: ''
  }

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
      
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
