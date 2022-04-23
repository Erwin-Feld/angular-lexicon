import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

import user_mock_data from '../../../mock-data/user_mock_data.json';

interface UserMockData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

@Component({
  selector: 'app-basic-material-table',
  templateUrl: './basic-material-table.component.html',
  styleUrls: ['./basic-material-table.component.scss'],
})
export class BasicMaterialTableComponent implements OnInit {
  userMockData: UserMockData[] = user_mock_data;

  columnsToDisplay: string[] = ['id', 'first_name', 'last_name', 'email'];

  constructor() {}

  selection = new SelectionModel<any>(true, []);
  logIndex(i:number) {
    console.log(i);
  }

  getRowData(row:UserMockData){
    console.log(row)
  }

  ngOnInit(): void {}
}
