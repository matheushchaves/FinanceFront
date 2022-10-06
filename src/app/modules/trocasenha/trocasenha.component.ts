import { TrocasenhaService } from './trocasenha.service';
import { AuthService } from './../../core/guards/auth/auth.service';
import { IUsuario } from './../../models/IUsuario';
import { Component, OnInit } from '@angular/core';
import { PoPageChangePassword } from '@po-ui/ng-templates';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trocasenha',
  templateUrl: './trocasenha.component.html',
  styleUrls: ['./trocasenha.component.css']
})
export class TrocasenhaComponent implements OnInit {

  constructor(private authService: AuthService, private trocasenhaService: TrocasenhaService, private router: Router) { }

  ngOnInit(): void {
  }

  salvar(passwords: PoPageChangePassword) {
    let usuarioAtual: IUsuario = this.authService.getUsuario()

    usuarioAtual.senha = passwords.newPassword ?? ""
    this.trocasenhaService.TrocaSenha(usuarioAtual)
      .subscribe(
        (response) => {
          this.authService.LogOut();
          this.router.navigateByUrl('');
        })
  }

}
