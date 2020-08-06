import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testing', content: 'This is for testing!'}];
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  // tslint:disable-next-line: typedef
  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // tslint:disable-next-line: typedef
  onBluePrintAdded(bluePrintData: {bluePrintName: string, bluePrintContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.bluePrintName,
      content: bluePrintData.bluePrintContent
    });
  }

  // tslint:disable-next-line: typedef
  onStartGameFired(firedNumber: number){
    console.log(firedNumber);
    if (firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }

  }
}
