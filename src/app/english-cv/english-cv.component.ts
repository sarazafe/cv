import { Component, OnInit } from '@angular/core';
import {EnglishProfile} from '../../profile/en';

@Component({
  selector: 'app-english-cv',
  templateUrl: './english-cv.component.html',
  styleUrls: ['./english-cv.component.scss']
})
export class EnglishCvComponent implements OnInit {
  englishProfile = EnglishProfile;
  constructor() { }

  ngOnInit(): void {
  }

}
