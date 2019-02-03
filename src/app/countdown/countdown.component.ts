import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Router } from '@angular/router';

// TODO: Fix styling
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
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
    clearInterval(this.intervalId);
    this.router.navigate(['/']);
  }
}
