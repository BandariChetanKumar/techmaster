'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hello World!');
  response.status(200).send('Tech At Core');
};

exports.event = (event, callback) => {
  callback();
};
