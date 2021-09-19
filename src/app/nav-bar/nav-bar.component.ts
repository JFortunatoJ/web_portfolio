import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private mobileMenu: any;
  private navList: any;
  private navLinks: any;
  private activeClass: string;

  constructor() {
  }

  ngOnInit(): void {
    this.mobileMenu = document.querySelector(".mobile-menu");
    this.navList = document.querySelector(".nav-list");
    this.navLinks = document.querySelectorAll(".nav-list li");
    this.activeClass = "active";

    if (this.mobileMenu) {
      this.mobileMenu.addEventListener("click", () => this.onMenuClick());
    }
  }

  onMenuClick(): void {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);

    this.navLinks.forEach((link, index) => {
      link.style.animation ? (link.style.animation = "") :
        (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`);
    });
  }
}
