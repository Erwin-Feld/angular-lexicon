import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataTransferCollectionComponent } from './components/data-transfer-between-components/data-transfer-collection.component';
import { ParentPassingDataToChildComponent } from './components/data-transfer-between-components/parent-to-child/parent-passing-data-to-child/parent-passing-data-to-child.component';
import { ChildGettingDataFromParentComponent } from './components/data-transfer-between-components/parent-to-child/child-getting-data-from-parent/child-getting-data-from-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataTransferCollectionComponent,
    ParentPassingDataToChildComponent,
    ChildGettingDataFromParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
