import Profile from "../schemas/Profile.js";
import { validatePassword } from "../lib/passwordValidator.js";

const register = async (request, response, next) => {
  //   console.log(request.body);
  const { username, emailAddress, passwordHash } = request.body;

  try {
    // check password strength
    validatePassword(passwordHash);

    // create new profile
    const newProfile = new Profile({ username, emailAddress, passwordHash });

    // save profile in database
    const savedProfile = await newProfile.save();

    return response.status(201).json({
      success: true,
      message: "Profile created",
      profile: savedProfile,
    });
  } catch (err) {
    next(err);
  }
};

export { register };
