import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }
}
