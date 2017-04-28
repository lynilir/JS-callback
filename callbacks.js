class Clock {

  constructor() {
    const time = new Date(Date.now());
    this.hours = time.getHours();
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    if (this.seconds === 59) {
      this.seconds = 0;
      if (this.minutes === 59) {
        this.minutes = 0;
        if (this.hours === 23) {
          this.hours = 0;
        }
        else {
          this.hours += 1;
        }
      }
      else {
        this.minutes += 1;
      }
    }
    else {
      this.seconds += 1;
    }

    this.printTime();
  }

}

const clock = new Clock();
