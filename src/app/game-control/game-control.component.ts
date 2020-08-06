import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval: number;
  lastNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onGameStart(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++ ;
    }, 1000);
  }

  // tslint:disable-next-line: typedef
  onGameStop(){
    clearInterval(this.interval);
  }

}
