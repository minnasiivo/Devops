import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'submit', component: SubmitComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
