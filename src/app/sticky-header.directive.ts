import { Directive, OnInit, ElementRef, HostBinding, HostListener } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Directive({
    /* tslint:disable-next-line:directive-selector */
    selector: '[stickyHeaderDirective]'
})
export class StickyHeaderDirective implements OnInit {

    ngOnInit() {
    }

    constructor() {}

    @HostListener('scroll', ['$event']) private onScroll($event: Event): void {
        //console.log($event.srcElement.scrollLeft, $event.srcElement.scrollTop);
        $('.hideme').each( function(i, element){
            
            //console.log(($(this).attr('id')))

            var theID = ($(this).attr('id'));
  
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();

            var bottom_a = $('.all' ).height();
            
            var toShow = $event.srcElement.scrollTop-bottom_of_object+1200;
            //console.log('bottom: ', bottom_of_object, "  toShow  " , toShow, " ID ", theID, " BOTTOM ", bottom_a)
            
            if(bottom_of_object < toShow && this === element){
                //console.log("YES")
                $(this).animate({'opacity':'1'},1500);
                
//                $("#"+theID ).animate({'opacity':'1'},1500);
            }
            /*var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1500);
            }*/
        }); 
    }   
}
/*
  angular
  .module('app', [])
  .directive('scrollContainer', scrollContainer)
  
function scrollContainer($window) {
  return {
    restrict: 'A',
    scope: true,
    link: function(scope, element, attrs) {
      
      angular.element($window).bind("scroll", function() {
        
      	$('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            // If the object is completely visible in the window, fade it it
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });
      });
    }
  }
}
*/