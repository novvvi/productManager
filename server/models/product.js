var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "A product must have a title"],
        minlength: [3, "need more info"],
        maxlength: [20, "need less info"]
    },
    price : {
        type: Number,
        required: [true, "It cannot be free"]
    },

    url: {
        type: String,
        required: [true, "what doies it look like"]
    }
}, {timestamps: true});

mongoose.model('Product', ProductSchema);