import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		// basic way
		// username : String,
		// email: String,
		// isActive : Boolean

		username: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

//                                   || this is used as refernce name
export const User = mongoose.model("User", userSchema);
