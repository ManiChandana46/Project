export class Booking {
  bookId: number;
  noOfSeats: number;
  seatSelected: string;
  flightClass: string;
  travelDate: Date;

  returnId: number;
  returnNoOfSeats: number;
  returnSeatSelected: string;
  returnFlightClass: string;

  to: string;
  from: string;
  startTime: string;
  endTime: string;
  price: number;
  returnTravelDate: Date;

  returnTo: string;
  returnFrom: string;
  returnStartTime: string;
  returnEndTime: string;
  returnPrice: number;
  duration: number;
  returnDuration: number;
}
