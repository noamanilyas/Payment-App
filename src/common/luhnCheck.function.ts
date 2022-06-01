export const luhnCheck = (number) => {
  /**
   * Number is invalid if it have anything else than
   * digit, dash or space
   */
  if (/[^0-9-\s]+/.test(number)) return false;

  let sum = 0;
  let digit = 0;
  let even = false;

  /**
   * Replace dashed & spaces
   */
  number = number.replace(/\D/g, "");

  for (let i = number.length - 1; i >= 0; i--) {
    digit = parseInt(number[i], 10);

    if (even) {
      digit *= 2;
      /**
       * luhn check will add the digits if multiplication result in 2 digits,
       * eg: 8*2 = 16 this will be be added to 1+6 = 7
       * but if we can also achieve same by subtracting 9 (result-9) eg: 16-9 = 7
       */
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    even = !even;
  }

  /**
   * Luhn formulah does 10-(sum % 10) === checkDigit, and doesn't add the last digit or check digit to the sum
   * But if we add the last digit to the sum we can do sum % 10 === 0
   */
  return sum % 10 === 0;
};
