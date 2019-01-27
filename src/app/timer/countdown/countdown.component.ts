import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

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
    position: absolute;
    top: 64px;
    left: 0px;
    height: calc(100% - 64px);
    width: 100%;
    background-color: #2c3e50;
    color: #ecf0f1;
    text-align: center;
    display: flex;
    align-items: center;
  }

  .wrapper {
    width: 100%;
  }
  `]
})
export class CountdownComponent implements OnInit {
  @Input() value: number;
  @Output() finish = new EventEmitter<boolean>();
  @Output() secondsRemaining = new EventEmitter<number>();

  intervalId = null;
  elapsedTime = 0;
  seconds = null;

  constructor() { }

  ngOnInit() {
    this.seconds = this.value;
    this.startCountdown(this.seconds);
  }

  startCountdown(seconds: number) {
    // emit the first value
    this.secondsRemaining.emit(this.getRemainingTime());

    this.intervalId = setInterval(() => {
      // display the timer rightaway without showing 0
      if (this.elapsedTime + 1 >= seconds) {
        this.secondsRemaining.emit(0);
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.finish.emit(true);
      } else {
        this.elapsedTime += 1;
        this.secondsRemaining.emit(this.getRemainingTime());
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
    this.finish.emit(false);
  }
}
