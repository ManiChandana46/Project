import { Time } from '@angular/common';
export class Select {
    public cityFrom: string;
    public cityTo: string;
    public departureTime: string;
    public arrivalTime: string;
    public duration: number;
    public price: number;

    constructor(cityFrom: string, cityTo: string, departureTime: string, arrivalTime: string, duration: number, price: number) {
        this.cityFrom = cityFrom;
        this.cityTo = cityTo
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime
        this.duration = duration;
        this.price = price;
    }
}