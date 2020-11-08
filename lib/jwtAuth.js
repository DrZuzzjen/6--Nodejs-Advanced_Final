'use strict'

// Función que devuelve un Middelware de autentificación con JWT

const jwt = require('jsonwebtoken');

module.exports = function () {
  return (req, res, next) => {
    // Comprobar que tenemos una cabecera Authorization con un JWT válido

    // Recoger el token
    const tokenJWT = req.get('Authorization') || req.query.token || req.body.token;

    // Si no hay token, no permitimos pasar
    if (!tokenJWT) {
      const error = new Error('No Token provided');
      error.status = 401;
      next(error)
      return
    }


    // Verificar el Token
    jwt.verify(tokenJWT, process.env.JWT_SECRET, (err, payload) => {
      if (err) return next(err);
      req.apiAuthUserId = payload._id;
      next()

    });

  };
};