import { Component, HostListener, } from '@angular/core';
@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  slidesPerView:number = 3;
  screenWidth!: number;

  @HostListener('window:resize')
  getScreenWidth(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth >= 320 && this.screenWidth <= 480){
      this.slidesPerView = 1;
    }
   else if(this.screenWidth >= 480 && this.screenWidth <= 992){
      this.slidesPerView = 2;
    }
    else if(this.screenWidth >= 992 && this.screenWidth <= 1200){
      this.slidesPerView = 3;
    }
  }
}
