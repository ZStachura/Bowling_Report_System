import { Component, OnInit } from '@angular/core';
import { ShortenedFile } from '../../../../shared/interfaces/shortenedFile';
import { LocalStorageService } from '../../../../shared/services/local-storage/local-storage.service';
import { PlayerInfo } from '../../../../shared/interfaces/playerInfo';
import { range } from 'rxjs';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrl:'./score-board.component.scss'
})
export class ScoreBoardComponent implements OnInit{
  constructor(private localStorage:LocalStorageService){}
  
  file!:ShortenedFile
  fileText!:string[]
  players:PlayerInfo[] = []
  correctFile:boolean=true

  ngOnInit() {
    this.file=this.localStorage.getCurrentFileLocalStorage()
    this.fileText = this.file.text.split("\n");
    this.getPlayerInfo()
  }

  getPlayerInfo() {
    if(this.fileText.length % 2 === 0){
      for(let i=0; i<this.fileText.length;i+=2){
        const playerName=this.fileText[i]
        const playerScoreString=this.fileText[i+1].split(",")
        const playerScore:any[] = [] 
        if(playerScoreString.length>=20 && playerScoreString.length <=22 ){
          for(const item of playerScoreString){
            if(item!=='X'){
              playerScore.push(Number(item))
            } else {
              playerScore.push(item)
            }
          }
        } else {
          this.correctFile=false
          break;
        }
        const player:PlayerInfo={
          name:playerName,
          scores:playerScore
        }
        this.players.push(player)
      }
    } else {
      this.correctFile=false
    }
  }
}
