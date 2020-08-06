import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  showSecret = false;
  username: string = "blue";
  log = [];


  constructor() {    }

  ngOnInit(): void {
  }
  onClick(){
    this.username = '';
   }

   onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);

   }
}
