let day = 2;
let dayWeek;

switch (day) {
  case 0:
    dayWeek = `Saturday`;
    break;
  case 1:
    dayWeek = `Monday`;
    break;
  case 2:
    dayWeek = `Tuesday`;
    break;
  case 3:
    dayWeek = `Wednesday`;
    break;
  case 4:
    dayWeek = `Thursday`;
    break;
  default:
    dayWeek = `Wrong day`;
}


console.log(`Today ${dayWeek}`);
