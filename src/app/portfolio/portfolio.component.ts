import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var jQuery: any;

import Rellax from 'rellax';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //var rellax = new Rellax('.rellax');

    function showAndHide() {
      $('.hideme').each( function(i){
        var bottom_of_object = $(this).position().top; //+ $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},1000);
        }
        /*else if (bottom_of_object > $(window).scrollTop()+50) {
        console.log(i, " bottom obj ", bottom_of_object, " Window top ",  $(window).scrollTop()+50)
        console.log(bottom_of_window, " OBJ ", bottom_of_object)
        //console.log(i, " THIS ", this)
        $(this).animate({'opacity':'0'},1500);
        }*/
      }); 
    }







    $(window).scroll( function(){
      showAndHide();
    });

    showAndHide();
      





  }
}
