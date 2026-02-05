import { init } from "./commands/init.js";

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
	case "init":
		init(args[1] || ".");
		break;
	default:
		console.log("Usage: git-from-scratch <command>");
		console.log("");
		console.log("Commands:");
		console.log("  init [path]    Initialize a new repository");
}
