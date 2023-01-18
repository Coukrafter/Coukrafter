export const parseDate = (date: Date) => date.toLocaleDateString("sk-SK");

export const parseDateStringToInputValue = (date: string) =>
  date.substring(0, 10);
