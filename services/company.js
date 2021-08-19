const db = require("./../services/db");

const config = require('./../config');

module.exports = {
	create
};

async function create({name, nit, phone, address, email}) {
	const companydb = await db.Company.findOne({ nit });
	if (!companydb) {
  	let newCompany = new db.Company({
  		name,
  		nit,
  		phone,
  		address,
      email
  	});
  	try {
  		await newCompany.save();
    	const companyfn = await db.Company.findOne({ nit });
    	return {message: 'Creacion exitosa', company: companyfn};
  	}catch (e) {
  		throw e;
  	}   	
  }else{
    throw 'El nit/compañia ya existe';
  }
};