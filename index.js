const weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';
/****************************************************** */
const month = new Array(12);
month[0] = 'January';
month[1] = 'February';
month[2] = 'March';
month[3] = 'April';
month[4] = 'May';
month[5] = 'June';
month[6] = 'July';
month[7] = 'August';
month[8] = 'September';
month[9] = 'October';
month[10] = 'November';
month[11] = 'December';
/****************************************************** */
const GetTime = function () {
  /****************************************************** */
  const update = new Date();
  /****************************************************** */
  const yy = update.getFullYear();
  const mm =
    update.getMonth() + 1 < 10 ? '0' + update.getMonth() : update.getMonth();
  const dd = update.getDate() < 10 ? '0' + update.getDate() : update.getDate();
  const wd = weekday[update.getDay()];
  const h =
    update.getHours() < 10 ? '0' + update.getHours() : update.getHours();
  const m =
    update.getMinutes() < 10 ? '0' + update.getMinutes() : update.getMinutes();
  const s = update.getSeconds();
  let MonthName = month[update.getMonth()]
  /****************************************************** */
  const clock = `${h}:${m} WIB`;
  const date = `${wd}, ${dd} ${MonthName} ${yy}`;
  const full = `${date}, ${clock}`;
  const sdate = `${dd}/${update.getMonth() + 1}/${yy}, ${clock}`;
  /****************************************************** */
  return {yy, mm, dd, wd, h, m, s, clock, date, full, sdate};
};

module.exports = GetTime;
