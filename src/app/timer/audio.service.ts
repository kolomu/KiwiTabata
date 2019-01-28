import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  gender = 'female';

  assetsPath = `assets/sounds/${this.gender}`;

  constructor() { }

  play(seconds: number) {
    if (seconds <= 0 && seconds > 10) {
      throw new Error('seconds are out of supported range (1-10)');
    } else {
      new Audio(`${this.assetsPath}/${seconds}.ogg`).play();
    }
  }

  playStart() {
    new Audio(`${this.assetsPath}/go.ogg`).play();
  }

  playPause() {
    new Audio(`assets/sounds/pause.ogg`).play();
  }

  playBreak() {
    new Audio(`assets/sounds/chinese-gong.mp3`).play();
  }

  playRound(roundNumber: number) {
    if (roundNumber > 10 || roundNumber <= 0) {
      throw new Error('rounds are out of supported range (1-10)');
    }

    this.playAirhorn().then(
      () => {
        new Audio(`${this.assetsPath}/round.ogg`).play().then(() => {
          setTimeout(() => this.play(roundNumber), 1000);
        });
      }
    )
  }

  playFinalRound() {
    new Audio(`${this.assetsPath}/final_round.ogg`).play();
  }

  playFinish() {
    new Audio(`${this.assetsPath}/congratulations.ogg`).play();
  }

  playAirhorn(): Promise<void> {
    return new Promise(
      (resolve) => {
        const audioElement = new Audio(`assets/sounds/air-horn-short.mp3`);
        audioElement.addEventListener('ended', () => {
          return resolve();
        });
        audioElement.play();
      }
    );
  }

}
