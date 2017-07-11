import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {


    constructor(private dataService: DataService) {
        
    }

    public incrementCounter() {
        this.dataService.currentCount++;
    }

    public currentCount() {
        return this.dataService.currentCount;
    }
}
