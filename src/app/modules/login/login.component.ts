import { AuthService } from './../../core/guards/auth/auth.service';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PoPageLogin } from '@po-ui/ng-templates';
import { IUsuarioFormGroup } from 'src/app/models/IUsuario';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string = "";
  constructor(private service: LoginService, private auth: AuthService, private route: ActivatedRoute, private router: Router,) {

  }
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(poPageLogin: PoPageLogin) {
    this.service.login(poPageLogin.login, poPageLogin.password).subscribe(
      (response) => {
        console.log(response)
        this.auth.setToken(response.token)
        this.auth.setUser(response.user)
        this.router.navigate([this.returnUrl]);
      }
    )
  }

}
