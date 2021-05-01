import { Component } from '@angular/core';
import {EnglishProfile} from '../profile/en';
import {SpanishProfile} from '../profile/es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv';
  englishProfile = EnglishProfile;
  spanishProfile = SpanishProfile;
}
