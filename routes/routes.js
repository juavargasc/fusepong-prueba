const config = require('./../config');
const moment = require('moment');
const jwt = require('jwt-simple');
const Auth = require('./../controllers/auth');
const User = require('./../controllers/user');
const Company = require('./../controllers/company');
const Project = require('./../controllers/project');
const UserStorie = require('./../controllers/userStorie');
const Ticket = require('./../controllers/ticket');
const Comment = require('./../controllers/comment');
const ensureAuthenticated = require('./../middleware/ensure-authenticated');

module.exports = function (app) {
  app.post('/auth/login', Auth.login);
  app.post('/auth/signup', Auth.signup);
  app.post('/auth/refresh', Auth.refresh);
  
  app.post('/company/create', Company.create);
  app.get('/company/page/:page', Company.list);

  app.post('/project/create', ensureAuthenticated, Project.create);
  app.put('/project/update', ensureAuthenticated, Project.update);
  app.get('/project/page/:page', ensureAuthenticated, Project.list);
  app.get('/project/item/:company', ensureAuthenticated, Project.listCompany);

  app.post('/user-storie/create', ensureAuthenticated, UserStorie.create);
  app.put('/user-storie/update', ensureAuthenticated, UserStorie.update);
  app.get('/user-storie/page/:page', ensureAuthenticated, UserStorie.list);
  app.get('/user-storie/item/:project', ensureAuthenticated, UserStorie.listProject);

  app.post('/ticket/create', ensureAuthenticated, Ticket.create);
  app.put('/ticket/update', ensureAuthenticated, Ticket.update);
  app.get('/ticket/page/:page', ensureAuthenticated, Ticket.list);
  app.get('/ticket/item/:storie', ensureAuthenticated, Ticket.listStorie);

  app.post('/comment/create', ensureAuthenticated, Comment.create);
  app.get('/comment/page/:page', ensureAuthenticated, Comment.list);

  app.get('/user', ensureAuthenticated, User.list);
  app.get('/user/page/:page', ensureAuthenticated, User.list);
  app.get('/user/:id', ensureAuthenticated, User.show);
};