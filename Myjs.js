var timer = document.getElementsByClassName("mytimer");

Sec = 0;
Min = 0;

var StopTime = true;

function StartTimer() {
  if (StopTime == true) {
    StopTime = false;
    StopWatch();
  }
}

function StopTimer() {
  if (StopTime == false) {
    StopTime = true;
  }
}

function ResetTimer() {
  StopTime = true;
  Sec = "00";
  Min = "00";

  timer[0].innerHTML = Min + ":" + Sec;
}

function StopWatch() {
  if (StopTime == false) {
    Sec = parseInt(Sec);
    Min = parseInt(Min);

    Sec++;

    if (Sec == 60) {
      Min++;
      Sec = 0;
    }

    if (Sec < 10 || Sec == 0) {
      Sec = "0" + Sec;
    }

    if (Min < 10 || Min == 0) {
      Min = "0" + Min;
    }

    console.log(Min + ":" + Sec);
    timer[0].innerHTML = Min + ":" + Sec;

    setTimeout(StopWatch, 1000);
  }
}
