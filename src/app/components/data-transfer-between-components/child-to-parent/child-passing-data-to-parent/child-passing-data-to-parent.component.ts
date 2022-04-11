import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-passing-data-to-parent',
  templateUrl: './child-passing-data-to-parent.component.html',
  styleUrls: ['./child-passing-data-to-parent.component.scss']
})
export class ChildPassingDataToParentComponent implements OnInit {
  /* creates a EventEmitter emitData which can be transmitted to the parent  */
  @Output() emitData = new EventEmitter<string>();

  sharedData = "Hello Dad!";

  constructor() { }

  ngOnInit(): void {
  }

  emitDataOnClick(){
    this.emitData.emit(this.sharedData)
  }

}


