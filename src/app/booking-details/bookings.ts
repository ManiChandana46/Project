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
  //public  dateOfBooking:string ;
	public to:string;
	private from: string;
	private startTime:string;
	private endTime:string;
	private price:number;
	//private returndateOfBooking:string;
	private returnTo:string;
	private returnFrom:string;
	private returnStartTime:string;
	private returnEndTime:string;
	private returnPrice:number;
	private duration:number;
  private returnDuration:number;
  private returnTravelDate:string;

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
    seatSelected: string,
    from: string,
    to: string,
    startTime: string,
    endTime: string,
    flightclass: string,
    //price: string,
    returnId: number,
    //returnTravelDate: string,
    returnNoOfSeats: number,
    returnFlightclass: string,
    returnSeatSelected: string,
    returnFrom: string,
    returnTo: string,
    returnStartTime: string,
    returnEndTime: string,
  ) {
    this.bookId =  bookId;
   // this.dateOfBooking = dateOfBooking;
    this.travelDate = travelDate;
    this.noOfSeats = noOfSeats;
    this.seatSelected= seatSelected;
    //this.flightNumber = flightNumber;
    //this.price = price;
    this.from = from;
    this.flightClass = flightclass;
    this.to = to;
    this.startTime = startTime;
    this.endTime = endTime;
    this.returnId= returnId;
    //this.returnTravelDate = travelDate;
    this.returnNoOfSeats = returnNoOfSeats;
    this.returnFlightClass = returnFlightclass;
    this.returnSeatSelected= returnSeatSelected;
    this.returnFrom = returnFrom;
    this.returnTo = returnTo;
    this.returnStartTime = returnStartTime;
    this.returnEndTime = returnEndTime;
  }
}
