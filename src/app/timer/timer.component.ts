import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  private rounds = 8;
  private intervalTime = 10;
  private progress = 0;
  intervalId = null;

  constructor() { }

  startRound() {
    // rechne aus was 1% den du erhoehst die Progressbar immer nur um 1
    // step = 1% in Millisekunden 
    // 20 Sekunden sind 100% -> 20.000 Millisekunden = 100%
    // 0,2 Sekunden sind 1%, 200 Millisekunden sind = 1%
    const step = (this.intervalTime / 100) * 1000;
    this.intervalId = setInterval(() => {
      if (this.progress >= 100) {
         return this.roundFinished();
      }
      this.progress  = this.progress + 1;
      console.log(this.progress);
    }, step);
  }

  roundFinished() {
    clearInterval(this.intervalId);
    console.log('round finished');
    this.progress = 100;
    this.rounds = this.rounds + 1;
  }

  ngOnInit() { }
}
