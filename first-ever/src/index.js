const express = require("express")
const redis = require("redis")
const routes = require("./routes")

const app = express()
const client = redis.createClient({
	url: `redis://${process.env.REDIS_HOST || "localhost"}:${
		process.env.REDIS_PORT || 6379
	}`,
})

client.on("error", (err) => console.log("Redis Client Error", err))

async function startServer() {
	await client.connect()

	// Use the routes
	app.use("/", routes(client))

	const port = 8080
	app.listen(port, () => {
		console.log(`App listening on port ${port}`)
	})
}

startServer().catch(console.error)
