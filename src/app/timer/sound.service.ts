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

  // play1() {
  //   new Audio(`${this.assetsPath}/1.ogg`).play();
  // }

  // play2() {
  //   new Audio(`${this.assetsPath}/2.ogg`).play();
  // }

  // play3() {
  //   new Audio(`${this.assetsPath}/3.ogg`).play();
  // }

  // play4() {
  //   new Audio(`${this.assetsPath}/4.ogg`).play();
  // }

  // play5() {
  //   new Audio(`${this.assetsPath}/5.ogg`).play();
  // }

  // play6() {
  //   new Audio(`${this.assetsPath}/6.ogg`).play();
  // }

  // play7() {
  //   new Audio(`${this.assetsPath}/7.ogg`).play();
  // }

  // play8() {
  //   new Audio(`${this.assetsPath}/8.ogg`).play();
  // }

  // play9() {
  //   new Audio(`${this.assetsPath}/9.ogg`).play();
  // }

  // play10() {
  //   new Audio(`${this.assetsPath}/10.ogg`).play();
  // }

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
