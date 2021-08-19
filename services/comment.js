const db = require("./../services/db");

const config = require('./../config');

module.exports = {
	create
};

async function create({description, ticket, user}) {
	let newComment = new db.Comment({
		description,
    ticket,
		user
	});
	try {
		const commentfn = await newComment.save();
    return {message: 'Creacion exitosa', comment: commentfn};
	}catch (e) {
		throw e;
	}   	  
};
