import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
