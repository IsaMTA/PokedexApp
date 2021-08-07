import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { } //Inyección de Router para navegar

  ngOnInit(): void {
  }

  home(){ //Función que lleva a página de inicio
    this.router.navigateByUrl('/home');
  }
}
