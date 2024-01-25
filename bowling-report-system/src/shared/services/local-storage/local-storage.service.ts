import { Injectable } from '@angular/core';
import { ShortenedFile } from '../../interfaces/shortenedFile';

@Injectable()
export class LocalStorageService {
  constructor() {}

  updateFilesLocalStorage(files:ShortenedFile[]){
    const stringifyFiles=JSON.stringify(files)
    localStorage.setItem('files',stringifyFiles)
  }

  getFilesLocalStorage(){
    const stringifyFiles = localStorage.getItem('files') as string
    if(stringifyFiles){
      return JSON.parse(stringifyFiles)
    } else {
      return []
    }
  }

  deleteFilesLocalStorage(){
    localStorage.removeItem('files')
  }

  setCurrentFileLocalStorage(file:ShortenedFile){
    const stringifyFile = JSON.stringify(file)
    localStorage.setItem('currentFile',stringifyFile)
  }

  getCurrentFileLocalStorage(){
    const stringifyFile = localStorage.getItem('currentFile') as string
    if(stringifyFile){
      return JSON.parse(stringifyFile)
    } else {
      return []
    }
  }

  deleteCurrentFileLocalStorage(){
    localStorage.removeItem('currentFile')
  }

  clearLocalStorage(){
    localStorage.clear()
  }

}
