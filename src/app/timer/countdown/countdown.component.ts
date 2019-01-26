import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-countdown',
  template: `<div class="countdown">{{getRemainingTime()}}</div>`,
  styles: [``]
})
export class CountdownComponent implements OnInit {
  @Input() value: number;
  @Output() finish = new EventEmitter<boolean>();

  intervalId = null;
  elapsedTime = 0;
  seconds = null;

  constructor() { }

  ngOnInit() {
    this.seconds =this.value
    this.startCountdown(this.seconds)
  }

  startCountdown(seconds: number) {
    this.intervalId = setInterval(() => {
      if (this.elapsedTime >= seconds) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.finish.emit(true);
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

}
