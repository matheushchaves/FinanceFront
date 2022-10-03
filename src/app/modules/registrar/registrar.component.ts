import { Router } from '@angular/router';
import { RegistrarService } from './registrar.service';
import { IUsuarioFormGroup, IUsuario } from './../../models/IUsuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  form: IUsuarioFormGroup;

  constructor(private formBuilder: FormBuilder, private service: RegistrarService, private router: Router, private notification: PoNotificationService) {
    // initialize the form
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required]
    }) as IUsuarioFormGroup; // make sure to double-check this list with the interface
  }

  ngOnInit(): void {
  }

  save() {
    const body = this.form.value;

    this.service.singIn(body).subscribe((usuario) => {
      this.router.navigateByUrl('');
      this.notification.success(`Usuário ${usuario.email} registrado com sucesso!`);
    },
      (error) => {
        console.error(error)
      }
    )


  }



}
