import { Component, Input } from '@angular/core';
import { PlayerInfo } from '../../../../../shared/interfaces/playerInfo';

@Component({
  selector: 'app-player-row',
  templateUrl: './player-row.component.html',
  styleUrl:'./player-row.component.scss'
})
export class PlayerRowComponent {
  @Input() player!:PlayerInfo
}
