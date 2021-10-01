import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pri-prueba',
  templateUrl: './pri-prueba.component.html',
  styleUrls: ['./pri-prueba.component.css']
})
export class PriPruebaComponent implements OnInit {

  title = 'hola soy angular'

  constructor() { }

  ngOnInit(): void {
  }

}
