import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  'title' = 'BeginAngluar';
  snap1!: FaceSnap;
  snap2!: FaceSnap;
  snap3!: FaceSnap;

  ngOnInit() {
    this.snap1 = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      0,
      'https://source.unsplash.com/random/100×100/?snowboard'
    )

    this.snap2 = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      0,
      'https://source.unsplash.com/random/100×100/?dress'
    )

    this.snap3 = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      0,
      'https://source.unsplash.com/random/100×100/?lingerie'
    )
  }
}

