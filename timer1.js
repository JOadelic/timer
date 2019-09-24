// peer programmed with najeam
const args = process.argv.slice([2]);

const timer = function(args) {
  let alarmTimes = args;
  
  alarmTimes.sort(function(a, b)  {
    return a - b;
  });
  for (let i = 0; i < alarmTimes.length; i++) {
  setTimeout(()=> {process.stdout.write('\x07')}, alarmTimes[i] * 1000);
  }
  return args;
};
timer(args);
