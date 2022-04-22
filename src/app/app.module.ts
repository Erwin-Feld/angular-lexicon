import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataTransferCollectionComponent } from './components/data-transfer-between-components/data-transfer-collection.component';
import { ParentPassingDataToChildComponent } from './components/data-transfer-between-components/parent-to-child/parent-passing-data-to-child/parent-passing-data-to-child.component';
import { ChildGettingDataFromParentComponent } from './components/data-transfer-between-components/parent-to-child/child-getting-data-from-parent/child-getting-data-from-parent.component';
import { ParentGettingDataFromChildComponent } from './components/data-transfer-between-components/child-to-parent/parent-getting-data-from-child/parent-getting-data-from-child.component';
import { ChildPassingDataToParentComponent } from './components/data-transfer-between-components/child-to-parent/child-passing-data-to-parent/child-passing-data-to-parent.component';
import { ChildBiDirectionalComponent } from './components/data-transfer-between-components/bi-directional/child-bi-directional/child-bi-directional.component';
import { ParentBiDirectionalComponent } from './components/data-transfer-between-components/bi-directional/parent-bi-directional/parent-bi-directional.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import { BasicMaterialTableComponent } from './components/using-tables/basic-material-table/basic-material-table.component';
import { TableCollectionComponent } from './components/using-tables/table-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataTransferCollectionComponent,
    ParentPassingDataToChildComponent,
    ChildGettingDataFromParentComponent,
    ParentGettingDataFromChildComponent,
    ChildPassingDataToParentComponent,
    ChildBiDirectionalComponent,
    ParentBiDirectionalComponent,
    BasicMaterialTableComponent,
    TableCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
