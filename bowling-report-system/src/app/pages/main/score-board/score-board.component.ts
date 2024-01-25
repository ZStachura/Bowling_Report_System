import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service/data-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrl:'./score-board.component.scss'
})
export class ScoreBoardComponent implements OnInit{
  constructor(private dataService:DataServiceService){}
  
  file!:File
  fileText!:string

  ngOnInit() {
    this.file=this.dataService.getCurrentFile()
    this.readTextFile(this.file)
  }

  readTextFile(file:File){
    const reader = new FileReader();

    reader.onload = () =>{
      this.fileText = reader.result as string
    }
    
    reader.readAsText(file)
  }

}
