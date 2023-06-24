import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapService {

  snaps: FaceSnap[] = [
    {
      id: 0,
      title: 'lingerie',
      description: "C'est sexy !",
      created_At: new Date(),
      snaps: 6,
      imageURL: 'https://source.unsplash.com/random/?lingerie,nude',
      buttonSnap: "Snap!"
    }, {
      id: 1,
      title: 'swimsuit',
      description: "C'est jolie !",
      created_At: new Date(),
      snaps: 0,
      imageURL: 'https://source.unsplash.com/random/?swimsuit,heels',
      buttonSnap: "Snap!"
    }, {
      id: 2,
      'title': 'dress',
      description: "C'est funky !",
      created_At: new Date(),
      snaps: 3,
      imageURL: 'https://source.unsplash.com/random/?dress,underwear',
      buttonSnap: "Snap!",
      'location': 'Alpes'
    }, {
      id: 3,
      title: 'heels',
      description: "C'est sexy !",
      created_At: new Date(),
      snaps: 6,
      imageURL: 'https://source.unsplash.com/random/?heels,swimsuit',
      buttonSnap: "Snap!"
    }, {
      id: 4,
      title: 'underwear',
      description: "C'est jolie !",
      created_At: new Date(),
      snaps: 0,
      imageURL: 'https://source.unsplash.com/random/?underwear,dress',
      buttonSnap: "Snap!"
    }, {
      id: 5,
      'title': 'sexy',
      description: "C'est funky !",
      created_At: new Date(),
      snaps: 3,
      imageURL: 'https://source.unsplash.com/random/?nude,lingerie',
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

  createFaceSnap(formValue: { title: string, description: string, imageURL: string, location?: string }) {
        const faceSnap: FaceSnap = {
            ...formValue,
            snaps: 0,
            created_At: new Date(),
            id: this.snaps[this.snaps.length - 1].id + 1,
            buttonSnap: "Snap!"
        };
        this.snaps.push(faceSnap);
    }
}
