export default class TimeToDate {
    constructor(futureDate) {
        this.now = new Date();
        this.futureDate = `${futureDate}`;
    }

    get _date() {
        return new Date(this.futureDate);
    }

    get _timeDiff() {
        return this._date.getTime() - this.now.getTime();
    }

    get _days() {
        return Math.floor(this._timeDiff / (24 * 60 * 60 * 1000));
    }

    get _hours() {
        return Math.floor(this._timeDiff / (60 * 60 * 1000));
    }

    get _minutes() {
        return Math.floor(this._timeDiff / (60 * 1000));
    }

    get _seconds() {
        return Math.floor(this._timeDiff / 1000);
    }

    get time() {
        return {
            days: this._days,
            hours: this._hours % 24,
            minutes: this._minutes % 60,
            seconds: this._seconds % 60
        }
    }
}

