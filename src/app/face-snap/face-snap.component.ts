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
  snapped! : boolean;
  buttonSnap!: string;

  onSnapToggle(){
    if(this.snapped){
      return this.addSnap();
    }
    return this.removeSnap();
  }

  addSnap() {
    this.faceSnap.snaps++;
    this.snapped = false;
    this.buttonSnap = "unSnap!";
  }

  removeSnap(){
    this.faceSnap.snaps--;
    this.snapped = true;
    this.buttonSnap = "Snap!";
  }

  ngOnInit() {
    this.snapped = true;
    this.buttonSnap = "Snap!";
  }
}
