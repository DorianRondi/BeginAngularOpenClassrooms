import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
