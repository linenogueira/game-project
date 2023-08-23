//Class for when Play button is pushed
class Timer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

 
  start(callback) {
    return (this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback();

   
      if (this.currentTime >= 5) {
        clearInterval(this.intervalId); 
        changeImageToImg5(); 
      }
    }, 1000));
  }




  getMinutes() {
    return parseInt(this.currentTime / 60);
  }

  getSeconds() {
    return parseInt(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes());
    const sec = this.computeTwoDigitNumber(this.getSeconds());

    return `${min}:${sec}`;
  }
}

