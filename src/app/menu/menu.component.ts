import { Component, OnInit, ElementRef,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'] ,

})
export class MenuComponent implements OnInit {

  //For showing and hiding side-menu and background overlay on medium to large screens
  isCollapsed: boolean = true;//For showing and hiding side-menu and background overlay

  constructor(private el:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {

    //Large Menu hides on smaller screens
    function largeMenu(screenWidthLarge) {
      if (screenWidthLarge.matches) { // If media query matches
        document.getElementById('large-menu').style.display = "none";
      } else if  (!screenWidthLarge.matches) {
        document.getElementById('large-menu').style.display = "block";
      }
    }

    var screenWidthLarge = window.matchMedia("(max-width: 700px)")
    largeMenu(screenWidthLarge) // Call listener function at run time
    screenWidthLarge.addListener(largeMenu) // Attach listener function on state changes

    //Small Menu hides on larger screens
    function SmallMenu(x) {
      if (screenWidthSmall.matches) { // If media query matches
        document.getElementById('mobile-menu').style.display = "none";
      } else if  (!screenWidthSmall.matches) {
        document.getElementById('mobile-menu').style.display = "block";
      }
    }

    var screenWidthSmall = window.matchMedia("(min-width: 700px)")
    SmallMenu(screenWidthSmall) // Call listener function at run time
    screenWidthSmall.addListener(SmallMenu) // Attach listener function on state changes
  }//end ngOnInit

  //For showing and hiding side-menu and background overlay on medium to large screens
   toggleMenu(){
     this.isCollapsed = !this.isCollapsed;
   }

    //For showing and hiding side-menu and background overlay on small screens
    toggleMobileOpen(){
    document.getElementById('side-menu-mobile').style.width = "100%";
  }

  toggleMobileClose(){
    document.getElementById('side-menu-mobile').style.width = "0";
  }

}


