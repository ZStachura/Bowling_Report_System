import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DragDropInputDirective } from './file-upload/drag-drop-input/drag-drop-input.directive';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { LocalStorageService } from '../../../shared/services/local-storage/local-storage.service';

@NgModule({
  declarations :[
  MainPageComponent,
  FileUploadComponent,
  DragDropInputDirective,
  ScoreBoardComponent,
],
  imports: [CommonModule, MainRoutingModule],
  exports: [],
  providers: [LocalStorageService]
})
export class MainModule {}
