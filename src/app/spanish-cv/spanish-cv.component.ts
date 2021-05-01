import { Component, OnInit } from '@angular/core';
import {SpanishProfile} from '../../profile/es';

@Component({
  selector: 'app-spanish-cv',
  templateUrl: './spanish-cv.component.html',
  styleUrls: ['./spanish-cv.component.scss']
})
export class SpanishCvComponent implements OnInit {
  spanishProfile = SpanishProfile;

  constructor() { }

  ngOnInit(): void {
  }

}
