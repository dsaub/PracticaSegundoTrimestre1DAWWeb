import { Component } from '@angular/core';
import { MainpageComponent } from './mainpage/mainpage.component';
import {NgIf} from '@angular/common';
import {DispositivosComponent} from './dispositivos/dispositivos.component';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [MainpageComponent, NgIf, DispositivosComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestor de Dispositivos';
  mainVisible: boolean = true;

  openDispositivo: boolean = false;
  openDispositivoPanel() {
    this.openDispositivo = true;
    this.mainVisible = false;
  }
}
