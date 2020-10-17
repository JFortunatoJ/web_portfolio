import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-herois-pandemia',
  templateUrl: './herois-pandemia.component.html',
  styleUrls: ['./herois-pandemia.component.css']
})
export class HeroisPandemiaComponent implements OnInit {

  constructor() { }

  public imagesUrl: string[] = [
    'assets/images/herois-pandemia/heroisPandemia_3.jpg',
    'assets/images/herois-pandemia/heroisPandemia_4.jpg',
    'assets/images/herois-pandemia/heroisPandemia_5.jpg',
    'assets/images/herois-pandemia/heroisPandemia_9.webp',
    'assets/images/herois-pandemia/heroisPandemia_10.webp',
    'assets/images/herois-pandemia/heroisPandemia_11.webp'
  ];

  ngOnInit(): void {
  }
}
