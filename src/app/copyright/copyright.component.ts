import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  copyright: string = "ATOS IT"
  hoy: any = new Date();

  constructor() { }

  ngOnInit() {
  }

}
