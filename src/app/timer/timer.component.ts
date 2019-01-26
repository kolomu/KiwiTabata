import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  private rounds = 8;
  private intervalTime = 20;
  private pauseIntervalTime = 10;
  private getReadyTime = 10;

  private progress = 0;
  private currentRound = 1;
  isPause = false;
  isFirstRound = true;

  onStartTimer = false;
  intervalId = null;

  // always when the start button is clicked reset the values
  initTimer() {
    this.isFirstRound = true;
    this.isPause = false;
    this.currentRound = 1;
    this.progress = 0;
  }

  constructor() { }

  startTimer() {
    this.onStartTimer = true;
  }

  onFinish() {
    console.log('called onFinish()');
    this.isFirstRound = false;
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
      } else {
        console.log('finish :-)');
      }
    } else {
      // starte eine Pause-Runde
      this.isPause = true;
      this._startRound(this.pauseIntervalTime);
    }

  }

  ngOnInit() { }

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
}
