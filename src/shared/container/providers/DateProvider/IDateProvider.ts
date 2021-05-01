export interface IDateProvider {
  convertToUTC(date: Date): string;
  dateNow(): Date;
  compareInHours(start_date: Date, end_date: Date): Number;
}