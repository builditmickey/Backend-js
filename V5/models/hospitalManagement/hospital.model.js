import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
	{
		name: {
			typre: String,
			required: true,
		},
		addressLine1: {
			typre: String,
			required: true,
		},
		addressLine2: {
			typre: String,
			required: true,
		},
		city: {
			typre: String,
			required: true,
		},
		pincode: {
			typre: String,
			required: true,
		},
		specializedIn: [
			{
				type: String,
			},
		],
	},
	{ timestamps: true },
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
