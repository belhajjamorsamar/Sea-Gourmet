const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	LastName: {
		type: String,
		required: true,
	},
	FirstName: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},
	Age: {
		type: Number,
		required: true,
	},

	phone: {
		type: Number,
		required: true,
	},

	image: {
		type: String,
		required: true,
	},

    created :{
        type:Date,
        required :true,
        default :Date.now,
    }
});

module.exports =mongoose.model('Admin' ,userSchema);
