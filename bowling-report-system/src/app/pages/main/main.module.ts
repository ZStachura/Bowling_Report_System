import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DragDropInputDirective } from './file-upload/drag-drop-input/drag-drop-input.directive';

@NgModule({
  declarations :[
  MainPageComponent,
  FileUploadComponent,
  DragDropInputDirective
],
  imports: [CommonModule, MainRoutingModule],
  exports: [],
})
export class MainModule {}
