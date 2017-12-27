import {Color} from './Color';

export class User {
  id: number;
  name: String;
  surname: String;
  email: String;
  skype: String;
  facebook: String;
  salary: number;
  otherIncome: number;
  expence: number;
  preferences: Array<String>;
  preferedColor: Color;
  married: boolean;
}
