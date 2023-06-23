import { Component, OnInit } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../service/face-snaps.service';

@Component({
  selector: 'snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit{

  snaps!: FaceSnap[];

  //private destroy$!: Subject<boolean>;

  constructor(private FaceSnapService: FaceSnapService){}

  ngOnInit() {
    this.snaps = this.FaceSnapService.getAllFaceSnaps();

    //this.destroy$ = new Subject<boolean>();

    /*
    interval(1000).pipe(
    tap(console.log),
    takeUntil(this.destroy$)
    ).subscribe();
    */
  }

  //ngOnDestroy(): void { this.destroy$.next(true); }

}
