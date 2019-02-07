import { Component, HostListener } from '@angular/core';


import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {NavItem} from '../navItems'

declare var $: any;
declare var jQuery: any;

import anime from 'animejs';
import { delay } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  ElementRef;
  navItems: NavItem[] = [
    {
      id: 1,
      displayName: 'Home',
      iconName: 'home',
      route: 'home'
    },
    {
      id: 2,
      displayName: 'Portfolio',
      iconName: 'work',
      route: 'portfolio',
      expand: true,
      children: [
        {
          displayName: 'CV',
          iconName: 'view_list',
          route: ''
        },
        {
          displayName: 'project 1',
          iconName: '',
          route: ''
        },
        {
          displayName: 'project 2',
          iconName: '',
          route: ''
        },
        {
          displayName: 'project 3',
          iconName: '',
          route: ''
        }
      ]
    },
    {
      id: 3,
      displayName: 'Contact',
      iconName: 'people',
      route: 'contact'
    },
    {
      id: 4,
      displayName: 'About',
      iconName: 'info',
      route: 'about'
    }
    ];
    
  private _mobileQueryListener: () => void;
  currentRate = 8;
  public isCollapsed = true;
  show = true;
  expandButton = 'expand_more';

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.expandButton = "expand_more";
    else
      this.expandButton = "expand_less";
  }

 myFunction(string) {
  string = string.toUpperCase()
  string = this.makeMoreExciting(string)
  console.log(string)
}

makeMoreExciting(string) {
  return string
}

// SIDENAV
openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}
closeNav() {
  console.log("HELLO THERE")
  document.getElementById("mySidenav").style.width = "0";
}


ngOnInit() {
  document.addEventListener('DOMContentLoaded', () => {
    $('.moreIcon').on('click', function() {
      /*if ( $(this).hasClass('active') ) {
      }*/
      return false;
  });

        // STICKY HEADER
      window.onscroll = function() {stickyHeader()};
      var header = document.getElementById("myHeader");
      var sticky = header.offsetTop;
      function stickyHeader() {
        header.classList.add("sticky");
      }

      /*  ANIME JS  */      
      // TOPBAR ANI
      anime.timeline({
        easing:'easeInQuad'
      })
      .add ({
        targets: '.topNavLinks',
        duration: 500,
        opacity: [0,1],
        translateY: [-20,0],
        delay: (el, i) => (100 * i),
        offset: '-=1000'
      });
      
      // LOGO ANI
      var logoAni = anime.timeline({
        easing:'easeInQuad',
      });
      logoAni.add({ 
        targets: '.lineDraw',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
      });
      anime({
        targets: '#LFilling .st0',
        duration: 300,
        easing:'easeInQuad',
        opacity: [0,1],
        offset: '+=300', 
        delay: (el, i) => (100 * i),
      })
      anime({
        targets: '#NFilling .st0',
        duration: 300,
        easing:'easeInQuad',
        opacity: [0,1],
        offset: "300",
        delay: (el, i) => (150 * i),
      });

      // LOGO HOVER
      let logo = document.querySelector('#myLogo')
      logo.addEventListener('mouseenter', () => {  
        anime({ 
          targets: '.lineDraw',
          stroke: '#' + Math.random().toString(16).slice(2, 8).toUpperCase(),
          easing: 'easeInOutSine',
          duration: 600,
        });
        anime({
          targets: '#LFilling .st0',
          duration: 300,
          easing:'easeInQuad',
          fill: '#' + Math.random().toString(16).slice(2, 8).toUpperCase(),
          offset: '+=300', 
          delay: (el, i) => (100 * i),
        })
        anime({
          targets: '#NFilling .st0',
          duration: 300,
          easing:'easeInQuad',
          fill: '#' + Math.random().toString(16).slice(2, 8).toUpperCase(),
          offset: "300",
          delay: (el, i) => (150 * i),
        });
      });



      //   UNDERLINE ANI
      let UnavLinks = document.querySelectorAll(".topNavLinks");
      const navLinks = Array.from(UnavLinks)
      navLinks.forEach((navLink) => {  
        navLink.addEventListener('mouseenter', () => {  // MOUSE ENTER
          anime({
            targets: navLink.querySelector(".line"),
            scaleX: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 600,
            
          })          
        })
        navLink.addEventListener('mouseleave', () => {  // MOUSE LEAVE
          anime({
            targets: navLink.querySelector(".line"),
            scaleX: [1, 0],
            opacity: [1, 0.5],
            easing: "easeOutExpo",
            duration: 700,
            
          })          
        })
      });
      


    });

  }
}

