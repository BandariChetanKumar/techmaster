'use strict';

exports.http = (request, response) => {
  response.status(200).send('This is for conflicts....');
};

exports.event = (event, callback) => {
  callback();
};
