import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn:'root'
})
export class FaceSnapService {

  snaps: FaceSnap[] = [
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
