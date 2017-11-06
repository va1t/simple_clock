
//getTime
//class for Clock
//this class will take a callback and place it into an array
//every second it will call the callback and give back the time

class Time {

  constructor() {
    this.timeCallbacks = [];
    setInterval(this.clockTick.bind(this), 1000);
  }

  setNewTimeCallback(callback) {
    this.timeCallbacks.push(callback);
  }

  clockTick() {
    this.timeCallbacks.forEach((cb) => cb(new Date()));
  }
}


//class for clockui
//this class will render the clockui
class Clockui {
  constructor() {
    //call a new timer
    this.time = new Time();
    this.time.setNewTimeCallback(this.render);
  }

  render(time) {
    document.getElementById('hours').innerHTML = time.getHours();
    document.getElementById('minutes').innerHTML = time.getMinutes();
    document.getElementById('seconds').innerHTML = time.getSeconds();
  }
}

let clock = new Clockui();
