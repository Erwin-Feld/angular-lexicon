import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-bi-directional',
  templateUrl: './child-bi-directional.component.html',
  styleUrls: ['./child-bi-directional.component.scss']
})
export class ChildBiDirectionalComponent implements OnInit {

  @Input() sharedData!: string; 

  @Output() emitData = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  transmitInput() {
    this.emitData.emit(this.sharedData)
  }

}
