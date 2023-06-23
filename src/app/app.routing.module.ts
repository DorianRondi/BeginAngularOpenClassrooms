import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { BigSnapComponent } from './big-snap/big-snap.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
  { path: 'facesnaps/bigsnap/:id', component: BigSnapComponent },
  { path: 'create', component: NewFaceSnapComponent }
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
