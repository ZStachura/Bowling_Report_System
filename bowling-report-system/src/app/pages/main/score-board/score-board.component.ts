import { Component, OnInit } from '@angular/core';
import { ShortenedFile } from '../../../../shared/interfaces/shortenedFile';
import { LocalStorageService } from '../../../../shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrl:'./score-board.component.scss'
})
export class ScoreBoardComponent implements OnInit{
  constructor(private localStorage:LocalStorageService){}
  
  file!:ShortenedFile
  fileText!:string

  ngOnInit() {
    this.file=this.localStorage.getCurrentFileLocalStorage()
  }
}
