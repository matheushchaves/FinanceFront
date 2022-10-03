import { AbstractControl, FormGroup } from "@angular/forms";

export interface IUsuario{
  id: string,
  datacriacao: Date,
  dataalteracao: Date,
  bloqueado: boolean,
  nome: string,
  email: string,
  senha: string,
}

export interface IUsuarioFormGroup extends FormGroup {
  value: IUsuario;

  // We need to add these manually again, same fields as IUser
  controls: {
    nome: AbstractControl;
    email: AbstractControl;
    senha: AbstractControl;
  };

}

