import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {
  currentFile!:File
  changeCurrentFile(file:File){
    this.currentFile=file
  }
  getCurrentFile(){
    return this.currentFile
  }
}
