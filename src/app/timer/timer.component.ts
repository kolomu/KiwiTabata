import { Component, OnInit } from '@angular/core';
import { AudioService } from './audio.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  private rounds = 8;
  private intervalTime = 5;
  private pauseIntervalTime = 2;
  private getReadyTime = 5;

  private progress = 0;
  private currentRound = 1;
  isPause = false;
  isFirstRound = true;
  isCountdownCancelled = false;

  onStartTimer = false;
  intervalId = null;

  constructor(private audioService: AudioService) { }

  ngOnInit() { }

  // always when the start button is clicked reset the values
  initTimer() {
    this.isFirstRound = true;
    this.isPause = false;
    this.currentRound = 1;
    this.progress = 0;
    this.isCountdownCancelled = false;
  }

  startTimer() {
    this.initTimer();
    this.onStartTimer = true;
  }

  onFinish(isSuccessfullyCounted) {
    if (isSuccessfullyCounted) {
      this.isFirstRound = false;
      this._startRound(this.intervalTime);
    } else {
      this.isCountdownCancelled = true;
    }
  }

  private _startRound(intervalTime: number) {
    // Problem bei Progressbar -> kann nur ganzzahlig erhoeht werden (1-100).
    // Daher rechne den Faktor aus um welchen die Funktion aufgerufen werden muss,
    // um die Progressbar um 1 zu erhoehen (Step) 1 Step => Progressbar += 1
    // 20 Sekunden sind 100% -> 20.000 Millisekunden = 100%
    // 0,2 Sekunden sind 1%  -> 200 Millisekunden = 1%
    this.progress = 0;
    const step = (intervalTime / 100) * 1000;
    this.intervalId = setInterval(() => {
      if (this.progress >= 100) {
        this.progress = 100;
        return this.roundFinished();
      }
      this.progress = this.progress + 1;
    }, step);
  }

  roundFinished() {
    // resetting stuff...
    clearInterval(this.intervalId);

    if (this.isPause) {
      if (this.currentRound < this.rounds) {
        // starte eine Fitness-Runde
        this.isPause = false;
        this._startRound(this.intervalTime);
        this.currentRound = this.currentRound + 1;
        // is it final round?
        if (this.currentRound === this.getRounds()) {
          this.audioService.playFinalRound();
        } else {
          this.audioService.playRound(this.currentRound);
        }
      } else {
        this.audioService.playFinish();
        console.log('finish :-)');
      }
    } else {
      // starte eine Pause-Runde
      this.isPause = true;
      this.audioService.playPause();
      this._startRound(this.pauseIntervalTime);
    }

  }

  announceRemainingSeconds(seconds: number) {
    console.log('announceRemainingSeconds' + seconds);
    if (seconds <= 10 && seconds > 0) {
      this.audioService.play(seconds);
    }

    if (seconds === 0) {
      this.audioService.playStart();
    }
  }

  getProgressValue() {
    return this.progress;
  }

  getRounds() {
    return this.rounds;
  }

  getCurrentRound() {
    return this.currentRound;
  }

  getGetReadyTime() {
    return this.getReadyTime;
  }

  shouldShowCountdown(): boolean {
    return !this.isCountdownCancelled && this.isFirstRound && this.onStartTimer
  }
}
