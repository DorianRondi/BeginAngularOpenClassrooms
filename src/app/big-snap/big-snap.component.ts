import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../service/face-snaps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bigSnap',
  templateUrl: './big-snap.component.html',
  styleUrls: ['./big-snap.component.scss']
})
export class BigSnapComponent implements OnInit {

  faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  created_At!: Date;
  snaps!: number;
  imageURL!: string;
  snapped! : boolean;
  buttonSnap!: string;

  constructor(private faceSnapsService: FaceSnapService, private router: Router, private route: ActivatedRoute) {}

  onViewSnap(): void{
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
    this.buttonSnap = this.faceSnap.buttonSnap;
  }
}
