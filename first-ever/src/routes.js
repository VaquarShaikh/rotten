const express = require("express")
const router = express.Router()
const fs = require("fs")

module.exports = function (client) {
	router.get("/", async (req, res) => {
		try {
			await client.set("message", "Learning docker")
			fs.writeFileSync("/app/data/samplee.txt", "Bitch ass nigga")
			fs.appendFileSync("/app/logs/app.log", "This is a log entry\n")
			fs.writeFileSync("/app/temp/cache.txt", "This is temporary data")
			res.send("Successfully set Redis key")
		} catch (err) {
			res.status(500).send("Error setting Redis key")
		}
	})

	router.get("/message", async (req, res) => {
		try {
			const reply = await client.get("message")
			const fileContent = fs.readFileSync("/app/data/sample.txt", "utf8")
			const logData = fs.readFileSync("/app/logs/app.log", "utf8")
			res.send(reply)
		} catch (err) {
			res.status(500).send("Error getting Redis key")
		}
	})

	return router
}
