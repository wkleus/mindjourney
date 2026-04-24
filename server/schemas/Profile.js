import mongoose from "mongoose";
import bcrypt from "bcrypt";

const ProfileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 25,
    },
    emailAddress: {
      type: String,
      unique: true,
      required: true,
      match: [/^\S+@\S+\.\S+$/],
      trim: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, // adds createdAt and updatedAt
);

// hash password if modified
ProfileSchema.pre("save", async function (next) {
  if (this.isModified("passwordHash")) {
    this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
  }
  next();
});

// compare plain password with hash
ProfileSchema.methods.comparePassword = async function (plainPassword) {
  return bcrypt.compare(plainPassword, this.passwordHash);
};

// index for faster email & username lookups
ProfileSchema.index({ username: 1 });
ProfileSchema.index({ emailAddress: 1 });

const Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
