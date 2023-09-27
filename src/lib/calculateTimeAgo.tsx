import mommentJS from "moment";

export const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};
export const calculateTime = (date: string) => {
  const m = mommentJS(date);
  return m.fromNow();
};
