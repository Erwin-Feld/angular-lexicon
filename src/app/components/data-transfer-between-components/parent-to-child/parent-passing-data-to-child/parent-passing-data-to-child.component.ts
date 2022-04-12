import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-passing-data-to-child',
  templateUrl: './parent-passing-data-to-child.component.html',
  styleUrls: ['./parent-passing-data-to-child.component.scss']
})
export class ParentPassingDataToChildComponent implements OnInit {

  data = "Im proud of you!"

  constructor() { }

  ngOnInit(): void {
  }

}
