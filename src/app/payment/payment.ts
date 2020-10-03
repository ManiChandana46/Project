import { Passenger } from '../personal-info/Passenger';

export class Payment {
  transactionAmount: number;
  paymentType: string;
  cardNumber: string;
  customerId: number;
  scheduleId: number;

  noOfSeats: number;
  seatSelected: string;
  flightClass: string;
  travelDate: Date;

  returnStatus: boolean;
  returnNoOfSeats: number;
  returnSeatSelected: string;
  returnClass: string;
  returnTravelDate: Date;
  returnScheduleId: number;

  passengerDetails: Passenger[];

}
