import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ScoreBoardComponent } from './score-board/score-board.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children:[
      {path:'',pathMatch:'full',redirectTo:'files'},
      {path:'files', component:FileUploadComponent, title: 'File Upload' },
      {path:'board',component:ScoreBoardComponent, title: 'Scoreboard' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}