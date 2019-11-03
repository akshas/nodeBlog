const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String
	}
}, {
	timestamps: true
});
post.set("tuJSON", {
	virtuals: true
});
module.exports = mongoose.model("Post", post);