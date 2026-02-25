const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function encodeBase62(num) {
  let str = "";
  while (num > 0) {
    str = chars[num % 62] + str;
    num = Math.floor(num / 62);
  }
  return str || "0";
}

export function decodeBase62(str) {
  return [...str].reduce((num, char) => num * 62 + chars.indexOf(char), 0);
}
