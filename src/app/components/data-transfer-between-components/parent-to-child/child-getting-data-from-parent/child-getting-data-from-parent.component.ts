import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-getting-data-from-parent',
  templateUrl: './child-getting-data-from-parent.component.html',
  styleUrls: ['./child-getting-data-from-parent.component.scss']
})
export class ChildGettingDataFromParentComponent implements OnInit {

  @Input() parentInputData!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
