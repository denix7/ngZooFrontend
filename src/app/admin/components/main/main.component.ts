import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'Main component';
  constructor() { }

  ngOnInit() {
  }

}