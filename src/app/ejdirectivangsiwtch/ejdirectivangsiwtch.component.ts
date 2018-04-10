import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangsiwtch',
  templateUrl: './ejdirectivangsiwtch.component.html',
  styleUrls: ['./ejdirectivangsiwtch.component.css']
})
export class EjdirectivangsiwtchComponent implements OnInit {

  jugadores: any[] = [
    {nombre: 'Magic Johnson' , equipo: 'L.A. Lakers'},
    {nombre: 'Larry Bird' , equipo: 'Boston Celtic'},
    {nombre: 'Michael Jordan', equipo: 'Chicago bulls'},
    {nombre: 'Kareem Abdul' , equipo: 'L.A. Lakers'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
