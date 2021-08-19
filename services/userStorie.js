const db = require("./../services/db");

const config = require('./../config');

module.exports = {
	create,
  update
};

async function create({name, description, project}) {
	let newUserStorie = new db.UserStorie({
		name,
		description,
		project
	});
	try {
		const userStoriefn = await newUserStorie.save();
    return {message: 'Creacion exitosa', userStorie: userStoriefn};
	}catch (e) {
		throw e;
	}   	  
};

async function update({id, name, description}) {
  const userStoriedb = await db.UserStorie.findOne({ _id:id });
  if (userStoriedb) {
    userStoriedb.name = name;
    userStoriedb.description = description;
    try {
      await userStoriedb.save();
      const userStoriefn = await db.UserStorie.findOne({ _id:id });
      return {message: 'Actualizacion exitosa', userStorie: userStoriefn};
    }catch (e) {
      throw e;
    }     
  }else{
    throw 'El proyecto no existe';
  }
};