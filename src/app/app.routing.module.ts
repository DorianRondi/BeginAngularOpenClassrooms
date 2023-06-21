import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'facesnaps', component: FaceSnapListComponent }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}
