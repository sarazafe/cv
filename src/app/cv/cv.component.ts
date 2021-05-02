import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
    @Input()
    profile: any;

    constructor() {
    }

    ngOnInit(): void {
    }
}
