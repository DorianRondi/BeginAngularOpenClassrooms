import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  created_At!: Date;
  snaps!: number;
  imageURL!: string;
  snaped! : boolean;
  buttonSnap!: string;

  onSnapToggle(){
    if(this.snaped){
      return this.addSnap();
    }
    return this.removeSnap();
  }

  addSnap() {
    this.faceSnap.snaps++;
    this.snaped = false;
    this.buttonSnap = "Snap!";
  }

  removeSnap(){
    this.faceSnap.snaps--;
    this.snaped = true;
    this.buttonSnap = "Unsnap!";
  }

  ngOnInit() {
    this.snaped = true;
    this.buttonSnap = "Snap!";
  }
}
