const UserStorie = require('./../models/userStorie');
const userStorieService = require("./../services/userStorie");

exports.create = async function(req, res, next){
  const {name, description, project} = req.body;
  try {
    userStorieService.create({name, description, project})
    .then(({ message, userStorie }) => {
      res.status(200);
      res.json({message, userStorie});
    })
    .catch(next);  
  }catch(e){
    throw e;
  }
};

exports.update = async function(req, res, next){
  const {id, name, description} = req.body;
  try {
    userStorieService.update({id, name, description})
    .then(({ message, userStorie }) => {
      res.status(200);
      res.json({message, userStorie});
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
  UserStorie.paginate(query, options).then(function(result) {
    res.json(result);
  });
};