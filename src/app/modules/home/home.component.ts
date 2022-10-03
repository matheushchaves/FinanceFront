import { AuthService } from './../../core/guards/auth/auth.service';
import { IUsuario } from './../../models/IUsuario';
import { Component, OnInit } from '@angular/core';
import { PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    const usuario = authService.getUsuario();
    this.profile.title = usuario.nome;
    this.profile.subtitle = usuario.email;
  }

  ngOnInit(): void {
  }

  profile: PoToolbarProfile = {
    title: '<Nome do Usuário>',
    subtitle: '<Email>'
  }

  profileActions: Array<PoToolbarAction> = [
    {label:'Troca Senha', action: () => this.TrocaSenha(), icon: 'po-icon po-icon-change'},
    {label:'Logout', action: () => this.logout(), icon: 'po-icon po-icon-exit'},
  ];

  logout(){
    this.authService.LogOut();
    this.router.navigateByUrl('/login');
  }

  TrocaSenha(){
    this.router.navigateByUrl('trocar');
  }

}
