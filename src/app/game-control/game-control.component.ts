import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  currentNumber: number = 0;
  @Output('gameValueChanged') gameValue: EventEmitter<number> = new EventEmitter<number>();
  gameInterval: NodeJS.Timer | undefined;

  startGame(){
    this.gameInterval = setInterval(() => {
      this.gameValue.emit(this.currentNumber)
      this.currentNumber += 1
    }, 1000);
  }

  stopGame(){
    clearInterval(this.gameInterval)
  }
}
