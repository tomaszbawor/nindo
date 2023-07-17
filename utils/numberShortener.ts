export function shortenNumber(num: number): string {
  const units = ["k", "M", "B", "T", "Qu", "Qi", "Sx", "Sp", "Oc"];

  const maxHandledNumber = Math.pow(1000, units.length + 1) - 1;

  if (num > maxHandledNumber) {
    return num.toExponential(2);
  }

  if (num < 1000) {
    if (num % 1 == 0) {
      return num.toString();
    } else {
      return num.toFixed(2);
    }
  }

  for (let i = units.length - 1; i >= 0; i--) {
    const decimal = Math.pow(1000, i + 1);
    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(2) + units[i];
    }
  }

  return "";
}
