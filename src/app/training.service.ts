import { Injectable } from '@angular/core';

export interface TimerSettings {
  rounds?: number;
  intervalTime?: number;
  breakIntervalTime?: number;
  getReadyTime?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  isManuallyStarted = false;
  isCountdownFinished = false;

  timerSettings: TimerSettings = {
    rounds: 8,
    intervalTime: 20,
    breakIntervalTime: 10,
    getReadyTime: 5
  };

  setTimerSettings(ts: TimerSettings) {
    this.timerSettings.rounds = ts.rounds || this.timerSettings.rounds;
    this.timerSettings.intervalTime = ts.intervalTime || this.timerSettings.intervalTime;
    this.timerSettings.breakIntervalTime = ts.breakIntervalTime || this.timerSettings.breakIntervalTime;
    this.timerSettings.getReadyTime = ts.getReadyTime || this.timerSettings.getReadyTime;
  }

  getTimerSettings(): TimerSettings {
    return { ...this.timerSettings };
  }
}
