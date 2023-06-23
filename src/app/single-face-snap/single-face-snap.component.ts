import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../service/face-snaps.service';

@Component({
  selector: 'single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  created_At!: Date;
  snaps!: number;
  imageURL!: string;
  snapped! : boolean;
  buttonSnap!: string;

  constructor(private faceSnapsService: FaceSnapService, private router: Router, private route: ActivatedRoute) {}

  onSnapToggle(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, this.faceSnap.buttonSnap);
    if(this.faceSnap.buttonSnap == "Snap!"){
      this.faceSnap.buttonSnap = "unSnap!";
    }else{
      this.faceSnap.buttonSnap = "Snap!";
    }
  }

  onShowFaceSnaps() {
    this.router.navigateByUrl('facesnaps');
  }
  
  onShowPicture() {
    this.router.navigateByUrl(`facesnaps/bigsnap/${this.faceSnap.id}`);
  }

  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
    this.buttonSnap = this.faceSnap.buttonSnap;
  }
}
