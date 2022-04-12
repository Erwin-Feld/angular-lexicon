import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-getting-data-from-child',
  templateUrl: './parent-getting-data-from-child.component.html',
  styleUrls: ['./parent-getting-data-from-child.component.scss']
})
export class ParentGettingDataFromChildComponent implements OnInit {

  childMessage = "still no Message :(";

  constructor() { }

  ngOnInit(): void {
  }

  getChildData(childData: string){
    this.childMessage = childData
  }

}
