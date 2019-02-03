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
  timerSettings: TimerSettings = {
    rounds: 8,
    intervalTime: 20,
    breakIntervalTime: 10,
    getReadyTime: 5
  };

  setTimerSettings(ts: TimerSettings) {
    this.timerSettings = { ...this.timerSettings, ...ts };
  }

  getTimerSettings(): TimerSettings {
    return { ...this.getTimerSettings };
  }
}
