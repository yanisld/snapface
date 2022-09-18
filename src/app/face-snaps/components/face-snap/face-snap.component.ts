import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  
  isSnap!: boolean;
  snapText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router){}

  ngOnInit() {
    this.isSnap = false;
    this.snapText = 'Oh Snap !';
  }

  onSnap() {
    if(this.isSnap == false){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapText = 'Oops unSnap !';
      this.isSnap = true;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapText = 'Oh Snap !';
      this.isSnap = false;
    }
  }

  onView(): void {
    this.router.navigateByUrl(`facesnaps/${ this.faceSnap.id }`);
  }
}
