const MONTH_NAMES_AND_DAYS = [
  ['Jan', 31],
  ['Feb', 28],
  ['Mar', 31],
  ['Apr', 30],
  ['May', 31],
  ['Jun', 30],
  ['Jul', 31],
  ['Aug', 31],
  ['Sep', 30],
  ['Oct', 31],
  ['Nov', 30],
  ['Dec', 31],
];

const isLeapYear = (year) =>
  (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

const isValidYear = (year) => year && year.toString().length === 4;
const isValidMonth = (monthIndex) => monthIndex >= 0 && monthIndex < 12; // Months are zero indexed
const isValidDay = (year, monthIndex, day) => {
  let availableDays = MONTH_NAMES_AND_DAYS[monthIndex][1];

  // If month is Feb, check if year is leap year
  if (monthIndex === 1 && isLeapYear(year)) {
    availableDays = 29;
  }

  return day && day >= 1 && day <= availableDays;
};

const isValidYearMonthDay = (year, monthIndex, day) =>
  isValidYear(year) &&
  isValidMonth(monthIndex) &&
  isValidDay(year, monthIndex, day);

function generateNumberWithSuffix(num) {
  const last = num % 10; // Last digit of our number
  const lastTwo = num % 100; // Last 2 digits of our number

  // "st" for numbers ending in 1
  if (last === 1 && lastTwo !== 11) return `${num}st`;

  // "nd" for numbers ending in 2
  if (last === 2 && lastTwo !== 12) return `${num}nd`;

  // "rd" for numbers ending in 3
  if (last === 3 && lastTwo !== 13) return `${num}rd`;

  // "th" for numbers from 11 - 13 and all other numbers
  return `${num}th`;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = MONTH_NAMES_AND_DAYS[date.getMonth()][0];
  const day = date.getDate();

  return `${month} ${generateNumberWithSuffix(day)} ${year}`;
}

/**
 *
 * @param {string|number|Date} date
 * @returns {string}
 */
export default function dateToString(date) {
  // If no date is passed, return today's date
  if (date === undefined) return formatDate(new Date());

  // If date is a date
  if (date instanceof Date) return formatDate(date);

  // If date is a number
  if (typeof date === 'number') return formatDate(new Date(date));

  // If date is a string
  if (typeof date === 'string' && (date.includes('-') || date.includes('/'))) {
    let year, month, day;

    // If date is separated by dashes
    if (date.includes('-')) {
      [year, month, day] = date.split('-');
    } else if (date.includes('/')) {
      [month, day, year] = date.split('/');
    }

    year = +year; // Make sure year is a number
    day = +day; // Make sure day is a number
    const monthIndex = +month - 1; // Make sure month is a number & zero indexed

    if (!isValidYearMonthDay(year, monthIndex, day)) return null; // If year, month or day are invalid, return null

    return formatDate(new Date(year, monthIndex, day));
  }

  return null;
}
