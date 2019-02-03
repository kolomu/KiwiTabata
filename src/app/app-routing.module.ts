import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { StartComponent } from './start/start.component';
import { CountdownComponent } from './countdown/countdown.component';

import { TrainingGuard } from './timer/training.guard';
import { CountdownGuard } from './countdown/countdown.guard';

const routes: Routes = [
  { path: 'training-start', component: CountdownComponent, canActivate: [CountdownGuard]},
  { path: 'tabata-timer', component: TimerComponent, canActivate: [TrainingGuard]},
  { path: '', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
