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
  snaps!: FaceSnap[];

  ngOnInit() {
    this.snaps = [
      {
        title :'Lingerie',
        description : "C'est sexy !",
        created_At : new Date(),
        snaps : 6,
        imageURL : 'https://source.unsplash.com/random/100×100/?lingerie'
      },{
        title :'Robe',
        description : "C'est jolie !",
        created_At : new Date(),
        snaps : 0,
        imageURL : 'https://source.unsplash.com/random/100×100/?dress'
      },{
        'title' :'Snowboard',
        description : "C'est funky !",
        created_At : new Date(),
        snaps : 3,
        imageURL : 'https://source.unsplash.com/random/100×100/?snowboard',
        'location' : 'Alpes'
      }
    ];
  }
}

