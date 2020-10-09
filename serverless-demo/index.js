'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hello this is shivasai... !');
};

exports.event = (event, callback) => {
  callback();
};
