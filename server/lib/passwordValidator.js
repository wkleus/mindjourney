import AppError from "./AppError.js";

export function validatePassword(password) {
  if (!password || password.length < 6) {
    throw new AppError(
      "Password is too short. Minimum length is 6 characters.",
      400,
    );
  }
}
