const Comment = require('./../models/comment');
const commentService = require("./../services/comment");

exports.create = async function(req, res, next){
  const {description, ticket, user} = req.body;
  try {
    commentService.create({description, ticket, user})
    .then(({ message, comment }) => {
      res.status(200);
      res.json({message, comment});
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
  Comment.paginate(query, options).then(function(result) {
    res.json(result);
  });
};