import express from "express";

const app = express();

app.use(express.static("dist"));

// app.get("/", (req, res) => {
// 	res.send("Server is running");
// });

app.get("/api/jokes", (req, res) => {
	const jokes = [
		{
			id: 1,
			joke: "What do you call a fake noodle?",
			answer: "An impasta.",
		},
		{
			id: 2,
			joke: "Why did the scarecrow win an award?",
			answer: "Because he was outstanding in his field.",
		},
		{
			id: 3,
			joke: "What do you call a fish without eyes?",
			answer: "A fsh.",
		},
		{
			id: 4,
			joke: "What do you call a fish without eyes?",
			answer: "A fsh.",
		},
	];

	res.json(jokes);
});

const port = process.env.port || 3000;

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
