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
    this.snap1 = {
      title :'Archibald',
      description : 'Mon meilleur ami depuis tout petit !',
      created_At : new Date(),
      snaps : 0,
      imageURL : 'https://source.unsplash.com/random/100×100/?lingerie'
    }

    this.snap2 = {
      title :'Archibald',
      description : 'Mon meilleur ami depuis tout petit !',
      created_At : new Date(),
      snaps : 0,
      imageURL : 'https://source.unsplash.com/random/100×100/?dress'
    }

    this.snap3 = {
      'title' :'Archibald',
      description : 'Mon meilleur ami depuis tout petit !',
      created_At : new Date(),
      snaps : 0,
      imageURL : 'https://source.unsplash.com/random/100×100/?snowboard',
      'location' : 'Alpes'
    }
  }
}

