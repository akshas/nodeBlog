const app = require("./app");
const config = require("./config");
const database = require("./database");

database().then(info => {
	console.log(`connected to: ${info.port}, ${info.host}, ${info.name}`);
	app.listen(config.Port, () => console.log(` Listening on port ${config.Port}...`));
}).catch(() => {
	console.error("Unable to connecto to database");
	process.exit(1);
});