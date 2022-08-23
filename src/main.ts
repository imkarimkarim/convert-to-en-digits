/**
 * convert farsi/persian digits to english digits
 */
const convertToEnDigits = (num: string): string => {
  if (!num) return num;
  num = num.toString();
  if (!num) return num;
  num = num
    .replace(/۰/g, "0")
    .replace(/۱/g, "1")
    .replace(/۲/g, "2")
    .replace(/۳/g, "3")
    .replace(/۴/g, "4")
    .replace(/۵/g, "5")
    .replace(/۶/g, "6")
    .replace(/۷/g, "7")
    .replace(/۸/g, "8")
    .replace(/۹/g, "9");
  return num;
};

export default convertToEnDigits;
