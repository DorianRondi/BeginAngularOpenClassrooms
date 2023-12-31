import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent {

  constructor(private router: Router){}

  onShowFaceSnaps() {
    this.router.navigateByUrl('facesnaps');
  }
}
