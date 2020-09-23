export class Booking {
    public bookingId: string;
    public dateOfBooking: string;
    public dateOfJourney: string;
    public numberOfSeats: number;
    public flightNumber:string;
    public from:string;
    public to:string;
    public startTime:string;
    public endTime:string;
    public class:string;
    public price:string;
    
    
    

    constructor(bookingId: string,dateOfBooking: string,dateOfJourney: string,numberOfSeats: number,flightNumber:string,from:string,to:string,startTime:string,endTime:string,classType:string,price:string ) {
        this.bookingId = bookingId;
        this.dateOfBooking = dateOfBooking;
        this.dateOfJourney = dateOfJourney;
        this.numberOfSeats = numberOfSeats;
        this.flightNumber = flightNumber;
        this.price = price;
        this.from=from;
        this.class=classType;
        this.to=to;
        this.startTime=startTime;
        this.endTime=endTime;

    }
}