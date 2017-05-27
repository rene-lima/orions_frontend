import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'my-app',
  template: `    <div>
    <div class="row header" id="topo">
      <div class="col s12 m6 hold-img">
        <img src="../arquivos/img/logo_orions.png" alt="Orion Sites e Host">
      </div>
      <div class="hold-links" [ngClass]="getRoute(classe)">
        <a class="{{classe.home}} s12 m3" routerLink="/home"> HOME </a>
        <a class="{{classe.quem_somos}} s12 m3" routerLink="/quem-somos"> QUEM SOMOS </a>
      </div>
    </div>
      <router-outlet> </router-outlet>
      <img class="back-top" (click)="toTop()" src="../arquivos/img/back_to_top.png">
      <div class="secao-rodape">
      <div class="center-align wrap-img-rodape">
        <img src="../arquivos/img/logo_orions_rodape.png" alt="Orion Sites e Host">
        <div class="center-align wrap-icones">
        <a href="https://www.facebook.com/Orionsguara/" target="_blank"> <img src="../icones/facebook.svg" class="icon-facebook"> </a>
        <img src="../icones/instagram.svg" class="icon-instagram"> 
        </div>
      </div>
    </div>
  `,
})
export class AppComponent  {
    classe = {
      home: '',
      quem_somos: ''
    }
    constructor(private router:Router) {}

    getRoute(){
      console.log("aqui")
      if (this.router.url === '/home'){
        this.classe.home = 'ativo';
        this.classe.quem_somos = '';
      }else{
        this.classe.home = '';
        this.classe.quem_somos = 'ativo';
      }
    }

    toTop(){
      window.scrollTo(0,0);
    }
 }
