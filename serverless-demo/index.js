'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hello this is vivek commit ..... !');
};

exports.event = (event, callback) => {
  callback();
};
