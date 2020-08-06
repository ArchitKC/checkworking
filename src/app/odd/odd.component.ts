import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input() oddNumberInput: number;
  constructor() { }

  ngOnInit(): void {
  }

}
