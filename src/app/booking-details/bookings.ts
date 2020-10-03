export class Booking {
  public bookId: number;
 // public dateOfBooking: string;
  public travelDate: string;
  public noOfSeats: number;
  public seatSelected : string;
  //public flightNumber: string;
  //public from: string;
  //public to: string;
  //public startTime: string;
  //public endTime: string;
  public flightClass: string;
 

  //public price: string;
  public returnId: number;
  public returnNoOfSeats: number;
  public returnSeatSelected : string;
  public returnFlightClass: string;

  constructor(
    bookId: number,
    //dateOfBooking: string,
    travelDate: string,
    noOfSeats: number,
    //flightNumber: string,
    //from: string,
    //to: string,
    //startTime: string,
    //endTime: string,
    flightclass: string,
    //price: string,
    returnId: number,
    returnTravelDate: string,
    returnNoOfSeats: number,
    returnFlightclass: string,
  ) {
    this.bookId =  bookId;
   // this.dateOfBooking = dateOfBooking;
    this.travelDate = travelDate;
    this.noOfSeats = noOfSeats;
    //this.flightNumber = flightNumber;
    //this.price = price;
    //this.from = from;
    this.flightClass = flightclass;
    //this.to = to;
    //this.startTime = startTime;
    //his.endTime = endTime;
    this.returnId= returnId;
    //this.returnTravelDate = travelDate;
    this.returnNoOfSeats = returnNoOfSeats;
    this.returnFlightClass = returnFlightclass;
  }
}
