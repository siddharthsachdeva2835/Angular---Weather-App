export class ForecastModel {
    constructor(public date: string, public temp: string,
        public icon: string, public weatherType: string,
        public tempMin: string, public tempMax: string) {
    }
}

