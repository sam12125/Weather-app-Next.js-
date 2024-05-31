// types.ts
export interface Weather {
  description: string;
}

export interface Main {
  temp_max: number;
  temp_min: number;
}

export interface ForecastData {
  dt_txt: string;
  main: Main;
  weather: Weather[];
}
