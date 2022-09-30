import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {

  mudarMenu: boolean = false;

  menus: Array<PoMenuItem> = [
    { label: 'Home', link: 'home', icon: 'po-icon po-icon-home' },
    {
      label: 'Cadastros', icon: 'po-icon po-icon-user-add', subItems: [
        { label: 'Categoria', link: 'categoria' },
        { label: 'Contas', link: 'contas' },        
      ]
    },
    {
      label: 'Movimentações', icon: 'po-icon po-icon-folder', subItems: [
        { label: 'Receitas', link: 'receitas' },
        { label: 'Despesas', link: 'despesas' },
      ]
    },
  ]
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  
}
