const Company = require('./../models/company');
const companyService = require("./../services/company");

exports.create = async function(req, res, next){
  const {name, nit, phone, address, email} = req.body;
  try {
    companyService.create({name, nit, phone, address, email})
    .then(({ message, company }) => {
      res.status(200);
      res.json({message, company});
    })
    .catch(next);  
  }catch(e){
    throw e;
  }
};

exports.list = function(req, res){
  let query = {};
  const page = req.params.page || 1;
  const options = {
    page: page
  };
  Company.paginate(query, options).then(function(result) {
    res.json(result);
  });
};