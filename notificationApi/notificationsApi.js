//TESTED on firefox


const maxMinutes = 59;
const maxSeconds = 59;
var timeAlarm    = {};
let newOption    = {};
 
const maxHour       = 24;
const selectHours   = document.getElementById('hours');
const selectMinutes = document.getElementById('minutes');
const selectSeconds = document.getElementById('seconds');
const timeClock     = document.getElementById('setClock');
const realTime      = document.getElementById('datetime');

timeClock.addEventListener('click', getTime);



for(let i = 1; i <= maxHour; i++ ) {
  newOption = document.createElement('option');
  newOption.value = i;
  newOption.text = i;
  selectHours.appendChild(newOption);
}

for(let i = 0; i <= maxMinutes; i++ ) {
  newOption = document.createElement('option');
  newOption.value = i;
  newOption.text = i;
  selectMinutes.appendChild(newOption);
}

for(let i = 0; i <= maxSeconds; i++ ) {
  newOption = document.createElement('option');
  newOption.value = i;
  newOption.text = i;
  selectSeconds.appendChild(newOption);
}

function getTime() {
  console.log('entrando');
  let hours   = selectHours.options[selectHours.selectedIndex].value;
  let minutes = selectMinutes.options[selectMinutes.selectedIndex].value;
  let seconds = selectSeconds.options[selectSeconds.selectedIndex].value;

  console.log(`hours ${hours}, minutes ${minutes}, seconds ${seconds}`);
  
  timeAlarm = {
    hours, minutes, seconds
  }
}

setInterval(() => {
  if(typeof timeAlarm !== 'undefined') {
    const { hours, minutes, seconds } = timeAlarm;
    // console.log(hours);
    const timeHours   = new Date().getHours();
    const timeMinutes = new Date().getMinutes();
    const timeSeconds = new Date().getSeconds();
    
    realTime.innerHTML = `${timeHours}:${timeMinutes}:${timeSeconds}`;
    
    if((hours == timeHours) && (minutes == timeMinutes) && (seconds == timeSeconds)) {
      displayScreen();
    }
  }

}, 1000);

function displayScreen() {
  const { hours, minutes, seconds } = timeAlarm;
  const timeUp = new Notification('Alarm Notification',{
    body: `it's time!!  ${hours}:${minutes}:${seconds}`,
   //icon: './img/goodday.png'
  });
  console.log(timeUp);
}

(async () => {
  // create and show the notification
  const showNotification = () => {
      // create a new notification
      const notification = new Notification('Show notifications', {
          body: 'To use this app, you should acept receive notificcations',
          //icon: './img/js.png'
      });

      // close the notification after 10 seconds
      setTimeout(() => {
          notification.close();
      }, 10 * 1000);
  }

  // show an error message
  const showError = () => {
      const error = document.querySelector('.error');
      error.style.display = 'block';
      error.textContent = 'You blocked the notifications';
  }

  // check notification permission
  let granted = false;

  if (Notification.permission === 'granted') {
      granted = true;
  }

})();