const Project = require('./../models/project');
const projectService = require("./../services/project");

exports.create = async function(req, res, next){
  const {name, description, company} = req.body;
  try {
    projectService.create({name, description, company})
    .then(({ message, project }) => {
      res.status(200);
      res.json({message, project});
    })
    .catch(next);  
  }catch(e){
    throw e;
  }
};

exports.update = async function(req, res, next){
  const {id, name, description} = req.body;
  try {
    projectService.update({id, name, description})
    .then(({ message, project }) => {
      res.status(200);
      res.json({message, project});
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
  Project.paginate(query, options).then(function(result) {
    res.json(result);
  });
};