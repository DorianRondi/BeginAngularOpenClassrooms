import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../service/face-snaps.service';
import { Router } from '@angular/router';

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
  buttonSnap!: string;

  constructor(private faceSnapsService: FaceSnapService, private router: Router) {}

  onSnapToggle(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, this.faceSnap.buttonSnap);
    if(this.faceSnap.buttonSnap == "Snap!"){
      this.faceSnap.buttonSnap = "unSnap!";
    }else{
      this.faceSnap.buttonSnap = "Snap!";
    }
  }

  onViewSnap(): void{
    /*this.router.navigateByUrl('facesnaps/'+this.faceSnap.id);*/
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

  ngOnInit(): void {
  }
}
