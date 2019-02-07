import { Component, OnInit} from '@angular/core';
import Rellax from 'rellax';

import {ImgRef} from './imagesRef'

declare var $: any;
declare var jQuery: any;
//declare function VerticalTimeline(element): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(){}

  imgRef: ImgRef[] = [
    {
      route: "assets/img/puzzletowerVR/myfinal.png",
      tags: ['School', 'VR'],
      display: true,
    },
    {
      route: "assets/img/puzzletowerVR/2.png",
      tags: ['School', 'VR'],
      display: false,
    },
    {
      route: "assets/img/puzzletowerVR/1.png",
      tags: ['School', 'VR'],
      display: false,
    }
  ];
  
  
  slideIndex;

  currentDiv(n) {
    this.showDivs(this.slideIndex = n);
  }

  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    if (n > x.length) {
    }
    if (n < 1) {
      this.slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[this.slideIndex-1].style.display = "block";
  }

  ngOnInit() {
    //var rellax = new Rellax('.rellax');
  }
}