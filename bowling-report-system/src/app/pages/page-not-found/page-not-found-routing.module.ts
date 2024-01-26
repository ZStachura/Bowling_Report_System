import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundInfoComponent } from './not-found-info/not-found-info.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundInfoComponent,
    title: 'Page Not Found',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNotFoundRoutingModule {}
