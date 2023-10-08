export interface DropdownValue {
  name: string;
  value: string;
}
export interface InputType {
  displayName: string;
  id: string;
  values: DropdownValue[];
}
export enum UserInputKeys {
  INSTRUMENT = "instrument",
  PERIOD = "period",
}
export type UserInput = {
  [key in UserInputKeys]: InputType;
};

export type Candles = [string, number, number, number, number, number];

export interface CandlesData {
  symbol: string;
  period: 'hourly' | 'daily';
  candles: Candles[];
}
