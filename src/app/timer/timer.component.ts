import { Component, OnInit } from '@angular/core';
import { AudioService } from './audio.service';
import { TrainingService } from '../training.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  rounds: number;
  intervalTime: number;
  breakIntervalTime: number;

  private progress = 0;
  private currentRound = 1;
  isBreak = false;
  isCountdownCancelled = false;

  intervalId = null;
  isPause = false;

  constructor(private audioService: AudioService, 
    private trainingService: TrainingService, 
    private router: Router) { }

  ngOnInit() {
    const timerSettings = this.trainingService.getTimerSettings();
    this.rounds = timerSettings.rounds;
    this.intervalTime = timerSettings.intervalTime;
    this.breakIntervalTime = timerSettings.breakIntervalTime;
    this.startTimer();
  }

  // always when the start button is clicked reset the values
  initTimer() {
    this.isBreak = false;
    this.isPause = false;
    this.currentRound = 1;
    this.progress = 0;
  }

  // reset to default view
  reset() {
    this.isBreak = false;
    this.currentRound = 0;
    this.progress = 0;
    this.isCountdownCancelled = true;
    this.isPause = false;

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

  }

  startTimer() {
    this.initTimer();
    this.audioService.playAirhorn();
    this._startRound(this.intervalTime);
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
      if (!this.isPause) {
        if (this.progress >= 100) {
          this.progress = 100;
          return this.roundFinished();
        }
        this.progress = this.progress + 1;
      }
    }, step);
  }

  roundFinished() {
    // resetting stuff...
    clearInterval(this.intervalId);

    if (this.isBreak) {
      if (this.currentRound < this.rounds) {
        // starte eine Fitness-Runde
        this.isBreak = false;
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
      }
    } else {
      // starte eine Break-Runde
      this.isBreak = true;
      this.audioService.playBreak();
      this._startRound(this.breakIntervalTime);
    }

  }

  announceRemainingSeconds(seconds: number) {
    if (seconds <= 10 && seconds > 0) {
      this.audioService.play(seconds);
    }

    if (seconds === 0) {
      this.audioService.playAirhorn();
    }
  }

  onPause() {
    this.isPause = true;
    this.audioService.playPause();
  }

  onContinue() {
    this.isPause = false;
    this.audioService.playAirhorn();
  }

  onCancel() {
    clearInterval(this.intervalId);
    this.router.navigate(['/']);
  }

  onFinish() {
    this.audioService.playFinish();
    this.reset();
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

}
