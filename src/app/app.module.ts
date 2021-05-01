import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CvComponent} from './cv/cv.component';
import {EnglishCvComponent} from './english-cv/english-cv.component';
import {SpanishCvComponent} from './spanish-cv/spanish-cv.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        CvComponent,
        EnglishCvComponent,
        SpanishCvComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
