import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTransferCollectionComponent } from './components/data-transfer-between-components/data-transfer-collection.component';
import { TableCollectionComponent } from './components/using-tables/table-collection.component';

/* add the component to the route path name is creative */
const routes: Routes = [
  {path: 'dataTransferCollection', component: DataTransferCollectionComponent},
  {path: 'tableCollection', component: TableCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
