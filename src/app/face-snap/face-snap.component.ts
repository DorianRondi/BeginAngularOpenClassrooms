import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../service/face-snaps.service';

@Component({
  selector: 'face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  [x: string]: any;
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  created_At!: Date;
  snaps!: number;
  imageURL!: string;
  snapped! : boolean;
  buttonSnap!: string;

  constructor(private faceSnapsService: FaceSnapService) {}

  onSnapToggle(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, this.buttonSnap);
    if(this.buttonSnap == "Snap!"){
      this.buttonSnap = "unSnap!";
    }else{
      this.buttonSnap = "Snap!";
    }
  }

  ngOnInit(): void {
    this.buttonSnap = "Snap!";
  }
}
