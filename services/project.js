const db = require("./../services/db");

const config = require('./../config');

module.exports = {
	create,
  update
};

async function create({name, description, company}) {
	const projectdb = await db.Project.findOne({ name });
	if (!projectdb) {
  	let newProject = new db.Project({
  		name,
  		description,
  		company
  	});
  	try {
  		await newProject.save();
    	const projectfn = await db.Project.findOne({ name });
    	return {message: 'Creacion exitosa', project: projectfn};
  	}catch (e) {
  		throw e;
  	}   	
  }else{
    throw 'El proyecto ya existe';
  }
};

async function update({id, name, description}) {
  const projectdb = await db.Project.findOne({ _id:id });
  if (projectdb) {
    projectdb.name = name;
    projectdb.description = description;
    try {
      await projectdb.save();
      const projectfn = await db.Project.findOne({ _id:id });
      return {message: 'Actualizacion exitosa', project: projectfn};
    }catch (e) {
      throw e;
    }     
  }else{
    throw 'El proyecto no existe';
  }
};