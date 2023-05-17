import { Component, OnInit } from '@angular/core';
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
  login = {
      username: '',
      password: ''
  }
  
  error = {
      username: '',
      password: '',
  }
  
  constructor(private router: Router){}
    
  ngOnInit(): void {
      
  }
  
  signIn() {
      if (!/^.{5,}$/.test(this.login.username)){
          this.error.username = 'Invalid username'
          return this.error.username
      } else {
          this.error.username = ''
      }
      if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(this.login.password)) {
          this.error.password= 'Invalid Password'
	  alert(this.login.password)
          return this.error.password
      } else {
          this.error.password = ''
      }

      localStorage.setItem('isAuth', 'true')
      this.router.navigate(['home'])
      return alert('success')
      
  }

}