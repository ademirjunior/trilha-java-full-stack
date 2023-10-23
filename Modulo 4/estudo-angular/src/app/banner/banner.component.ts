import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy {
  
  hoje: Date = new Date();
  timerId?: any; 

  ngOnInit(): void {
    this.timerId = setInterval(()=>{
      this.hoje = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }

}
