import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainingService, TimerSettings } from '../training.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  intervalTime: number;
  breakIntervalTime: number;
  getReadyTime: number;
  rounds: number;

  constructor(private router: Router, private trainingService: TrainingService) { }

  start(form: NgForm) {
    const settings = <TimerSettings>form.value;
    this.trainingService.setTimerSettings(settings);
    this.trainingService.isManuallyStarted = true;
    this.router.navigate(['/training-start']);
  }
}
