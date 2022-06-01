import { luhnCheck } from "../../common/luhnCheck.function";

export const expDateHelper = (obj, helper) => {
  const { expiryMonth, expiryYear, exp } = obj;

  if (exp.split("/")[0] === expiryMonth && exp.split("/")[1] === expiryYear) {
    const expDate = new Date();
    expDate.setFullYear(expiryYear, expiryMonth, 1);

    if (expDate > new Date()) {
      return obj;
    }
  }
  return helper.error("any.invalid");
};

export const luhnCheckHelper = (value, helper) => {
  if (luhnCheck(value)) {
    return value;
  }
  return helper.error("any.invalid");
};
