import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  gender = 'female';

  assetsPath = `assets/sounds/${this.gender}`;

  constructor() { }

  play(seconds: number) {
    if( seconds <= 0 && seconds > 10) {
      throw new Error('seconds are out of supported range (1-10)');
    } else {
      new Audio(`${this.assetsPath}/${seconds}.ogg`).play();
    }
  }

  playStart() {
    new Audio(`${this.assetsPath}/go.ogg`).play();
  }

  playRound() {
    new Audio(`${this.assetsPath}/round.ogg`).play();
  }

  playFinalRound() {
    new Audio(`${this.assetsPath}/final_round.ogg`).play();
  }

  playGo() {
    new Audio(`${this.assetsPath}/go.ogg`).play();
  }

  playFinish() {
    new Audio(`${this.assetsPath}/congratulations.ogg`).play();
  }

}
