import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTransferCollectionComponent } from './components/data-transfer-between-components/data-transfer-collection.component';

/* add the component to the route path name is creative */
const routes: Routes = [
  {path: 'dataTransferCollection', component: DataTransferCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
