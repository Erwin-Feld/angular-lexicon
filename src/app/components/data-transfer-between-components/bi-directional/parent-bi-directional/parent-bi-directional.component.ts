import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-bi-directional',
  templateUrl: './parent-bi-directional.component.html',
  styleUrls: ['./parent-bi-directional.component.scss']
})
export class ParentBiDirectionalComponent implements OnInit {

  data!:string

  constructor() { }

  ngOnInit(): void {
  }

  getChildData(childData: string){
    this.data = childData
  }


}
