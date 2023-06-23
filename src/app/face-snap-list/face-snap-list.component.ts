import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../service/face-snaps.service';

@Component({
  selector: 'snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit{

  snaps!: FaceSnap[];

  constructor(private FaceSnapService: FaceSnapService){}

  ngOnInit() {
    this.snaps = this.FaceSnapService.getAllFaceSnaps();
  }

}
