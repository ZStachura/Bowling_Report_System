import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../../shared/services/local-storage/local-storage.service';
import { ShortenedFile } from '../../../../shared/interfaces/shortenedFile';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent implements OnInit{
files: ShortenedFile[] =[]
droppedFiles:File[] =[]
fileText!:string

constructor(private router:Router, private localStorage:LocalStorageService){}

ngOnInit() {
  this.files=this.localStorage.getFilesLocalStorage()
}

prepareFilesList(files: File[]) {
  for (const item of files) {
    let reader = new FileReader();
    reader.onload = (event) => {
        let text = event.target!.result as string;
        let myFile: ShortenedFile = {
        name: item.name,
        text: text
      };
      this.files.push(myFile);
      this.updateLocalStorage()
    };
    reader.readAsText(item);
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
  this.updateLocalStorage();
}

onToShow(file:ShortenedFile){
  this.localStorage.setCurrentFileLocalStorage(file)
  this.router.navigate(['/main/board'])
}

updateLocalStorage(){
  this.localStorage.updateFilesLocalStorage(this.files)
}
}
