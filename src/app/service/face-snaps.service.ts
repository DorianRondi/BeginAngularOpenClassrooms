import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapService {

  snaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Lingerie',
      description: "C'est sexy !",
      created_At: new Date(),
      snaps: 6,
      imageURL: 'https://source.unsplash.com/random/100×100/?lingerie,underwear',
      buttonSnap: "Snap!"
    }, {
      id: 2,
      title: 'Robe',
      description: "C'est jolie !",
      created_At: new Date(),
      snaps: 0,
      imageURL: 'https://source.unsplash.com/random/100×100/?lingerie,dress',
      buttonSnap: "Snap!"
    }, {
      id: 3,
      'title': 'Snowboard',
      description: "C'est funky !",
      created_At: new Date(),
      snaps: 3,
      imageURL: 'https://source.unsplash.com/random/100×100/?lingerie,heels',
      buttonSnap: "Snap!",
      'location': 'Alpes'
    }, {
      id: 4,
      title: 'Lingerie',
      description: "C'est sexy !",
      created_At: new Date(),
      snaps: 6,
      imageURL: 'https://source.unsplash.com/random/100×100/?lingerie,swimsuit',
      buttonSnap: "Snap!"
    }, {
      id: 5,
      title: 'Robe',
      description: "C'est jolie !",
      created_At: new Date(),
      snaps: 0,
      imageURL: 'https://source.unsplash.com/random/100×100/?lingerie,car',
      buttonSnap: "Snap!"
    }, {
      id: 6,
      'title': 'Snowboard',
      description: "C'est funky !",
      created_At: new Date(),
      snaps: 3,
      imageURL: 'https://source.unsplash.com/random/100×100/?lingerie,snowboard',
      buttonSnap: "Snap!",
      'location': 'Alpes'
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.snaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.snaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: string): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    console.log(faceSnap.snaps+" "+snapType);
    snapType === 'Snap!' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
