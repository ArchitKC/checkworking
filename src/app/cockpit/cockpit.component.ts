import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // tslint:disable-next-line: no-output-rename
  @Output('servCreated') serverCreate = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreate = new EventEmitter<{bluePrintName: string, bluePrintContent: string}>();
  serverElements = [{type: 'blueprint', name: 'Testing', content: 'This is for testing!'}];
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreate.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
    this.toAddinCockpit('server', serverNameInput.value);
  }

  // tslint:disable-next-line: typedef
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreate.emit({
      bluePrintName: serverNameInput.value,
      bluePrintContent: this.serverContentInput.nativeElement.value
    });
    this.toAddinCockpit('blueprint', serverNameInput.value);
  }

  // tslint:disable-next-line: typedef
  toAddinCockpit(serverType: string, serverInputName: string){
    if (serverType === 'blueprint'){
      this.serverElements.push({
        type: 'blueprint',
        name: serverInputName,
        content: this.serverContentInput.nativeElement.value
      });
    }else{
      this.serverElements.push({
        type: 'server',
        name: serverInputName,
        content: this.serverContentInput.nativeElement.value
      });
    }
  }
}
