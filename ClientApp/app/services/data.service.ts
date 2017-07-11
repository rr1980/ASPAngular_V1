import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    public currentCount = 0;

    constructor() {
        console.log("DataService started...");
    }
}