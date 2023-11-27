import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsAngularComponent } from './forms-angular/forms-angular.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'welcome', component:WelcomePageComponent},
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  {path : 'forms', component: FormsAngularComponent},
  {path : 'dashboard' , component: DashBoardComponent},
  {path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
