import { Component } from '@angular/core';

@Component({
  selector: 'face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  title!: string;
  description!: string;
  created_At!: Date;
  snaps!: number;
  imageURL!: string;
  snaped! : boolean;
  buttonSnap!: string;

  onSnapToggle(){
    console.log (this.snaped);
    if(this.snaped){
      return this.addSnap();
    }
    return this.leftSnap();
  }

  addSnap() {
    this.snaps++;
    this.snaped = false;
    this.buttonSnap = "Snap!";
  }

  leftSnap(){
    this.snaps--;
    this.snaped = true;
    this.buttonSnap = "Unsnap!";
  }

  ngOnInit() {
    this.snaped = true;
    this.buttonSnap = "Snap!";
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.created_At = new Date();
    this.snaps = 6;
    this.imageURL = 'https://source.unsplash.com/random/100×200/?snowboard';
  }
}
