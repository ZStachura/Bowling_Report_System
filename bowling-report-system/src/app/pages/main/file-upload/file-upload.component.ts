import { Component } from '@angular/core';
import { DataServiceService } from '../data-service/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
files: File[] =[]
droppedFiles:File[] =[]

constructor(private dataService:DataServiceService, private router:Router){}

prepareFilesList(files: File[]) {
  for (const item of files) {
    this.files.push(item);
  }
}

onFileDropped(event:File[]) {
  this.droppedFiles =[]
  for(const file of event){
    if(file.type==='text/plain'){
      this.droppedFiles.push(file)
    }
  }
  this.prepareFilesList(this.droppedFiles);
}

fileHandler(event:Event) {
  const filesList = (event.target as HTMLInputElement).files
  if(filesList){
    const files = Array.from(filesList)
    this.prepareFilesList(files);
  }
}
deleteFile(index: number) {
  this.files.splice(index, 1);
}

onToShow(file:File){
  this.dataService.changeCurrentFile(file)
  this.router.navigate(['/main/board'])
}
}
