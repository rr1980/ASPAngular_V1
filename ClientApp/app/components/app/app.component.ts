import { Component } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    onResizeEnd(event: ResizeEvent): void {
        console.log('Element was resized', event);
    }
}
