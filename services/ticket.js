const db = require("./../services/db");

const config = require('./../config');

module.exports = {
	create,
  update
};

async function create({name, description, status, userStorie}) {
	let newTicket = new db.Ticket({
		name,
		description,
    status,
		userStorie
	});
	try {
		const ticketfn = await newTicket.save();
    return {message: 'Creacion exitosa', ticket: ticketfn};
	}catch (e) {
		throw e;
	}   	  
};

async function update({id, name, description, status}) {
  const ticketdb = await db.Ticket.findOne({ _id:id });
  if (ticketdb) {
    ticketdb.name = name;
    ticketdb.description = description;
    ticketdb.status = status;
    try {
      await ticketdb.save();
      const ticketfn = await db.Ticket.findOne({ _id:id });
      return {message: 'Actualizacion exitosa', ticket: ticketfn};
    }catch (e) {
      throw e;
    }     
  }else{
    throw 'El ticket no existe';
  }
};