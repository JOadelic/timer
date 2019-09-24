// peer programmed with najeam
const args = process.argv.slice([2]);

const timer = function(args) {
  let alarmTimes = args;
  alarmTimes.sort(function(a, b)  {
    return a - b;
  });

  for (let i = 0; i < alarmTimes.length; i++) {
    if (alarmTimes[i] >= 1)
  setTimeout(()=> {process.stdout.write('\x07')}, alarmTimes[i] * 1000);
  } 
  
};
timer(args);