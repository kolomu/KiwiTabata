import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Router } from '@angular/router';

// TODO: Fix styling
@Component({
  selector: 'app-countdown',
  template: `<div class="countdown">
  <div class="wrapper">    
      <div class="time mat-display-4">
        {{getRemainingTime()}}
      </div>
        <button mat-raised-button color="warn" type="button" (click)="onCancel()">Cancel</button>
      </div>
    </div>`,
  styles: [`
  .countdown {
    width: 100%;
    background-color: #2c3e50;
    color: #ecf0f1;
    text-align: center;
    display: flex;
    align-items: center;
  }

  .wrapper {
    width: 100%;
    height: 100%;
  }

  `]
})
export class CountdownComponent implements OnInit {
  intervalId = null;
  elapsedTime = 0;
  seconds = null;


  constructor(private trainingService: TrainingService, private router: Router) { }

  ngOnInit() {
    this.seconds = this.trainingService.getTimerSettings().getReadyTime;
    this.startCountdown(this.seconds);
  }

  startCountdown(seconds: number) {
    this.intervalId = setInterval(() => {
      // display the timer rightaway without showing 0
      if (this.elapsedTime + 1 >= seconds) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.router.navigate(['/tabata-timer'])
      } else {
        this.elapsedTime += 1;
      }
    }, 1000);
  }

  getRemainingTime() {
    if (!this.seconds) {
      return 0;
    }
    return (this.seconds - this.elapsedTime);
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
