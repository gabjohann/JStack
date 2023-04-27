const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const router = Router();

// Desta forma, o middleware intercepta somente esta rota
router.get(
  '/contacts',
  (request, response, next) => {
    // se tirar o response da erro
    request.appID = 'MeuAppID';
    next(); // desta forma ele chamada o próximo middleware
  },
  ContactController.index
);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);

module.exports = router;
