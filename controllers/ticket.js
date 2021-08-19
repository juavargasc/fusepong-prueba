const Ticket = require('./../models/ticket');
const ticketService = require("./../services/ticket");

exports.create = async function(req, res, next){
  const {name, description, status, userStorie} = req.body;
  try {
    ticketService.create({name, description, status, userStorie})
    .then(({ message, ticket }) => {
      res.status(200);
      res.json({message, ticket});
    })
    .catch(next);  
  }catch(e){
    throw e;
  }
};

exports.update = async function(req, res, next){
  const {id, name, description, status} = req.body;
  try {
    ticketService.update({id, name, description, status})
    .then(({ message, ticket }) => {
      res.status(200);
      res.json({message, ticket});
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
  Ticket.paginate(query, options).then(function(result) {
    res.json(result);
  });
};