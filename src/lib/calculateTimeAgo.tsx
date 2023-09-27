export const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};
export const calculateTime = (date: string) => {
  const now = new Date();
  const newDate = new Date(date);
  const dateInTime = now.getTime() - newDate.getTime();
  const dateInDays = dateInTime / 1000 / 60 / 60 / 24;
  return Math.round(dateInDays);
};
