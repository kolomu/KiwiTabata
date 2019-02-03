import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { StartComponent } from './start/start.component';
import { CountdownComponent } from './countdown/countdown.component';

const routes: Routes = [
  { path: 'training-start', component: CountdownComponent},
  { path: 'tabata-timer', component: TimerComponent },
  { path: '', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
