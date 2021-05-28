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
month[1] = 'January';
month[2] = 'February';
month[3] = 'March';
month[4] = 'April';
month[5] = 'May';
month[6] = 'June';
month[7] = 'July';
month[8] = 'August';
month[9] = 'September';
month[10] = 'October';
month[11] = 'November';
month[12] = 'December';
/****************************************************** */
const GetTime = function () {
  /****************************************************** */
  const update = new Date();
  /****************************************************** */
  const yy = update.getFullYear();
  const mm =
    update.getMonth() + 1 < 10 ? '0' + (update.getMonth() + 1) : update.getMonth() + 1;
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
