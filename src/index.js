const http = require('http');
const url = require('url');
const query = require('querystring');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const htmlHandler = require('./htmlResponses.js');
const responseHandler = require('./responses.js');

const urlStruct = {
  '/': htmlHandler.getIndexResponse,
  '/class-browser': htmlHandler.getClassBrowserClientResponse,
  '/saved-characters': htmlHandler.getSavedCharactersResponse,
  '/admin': htmlHandler.getAdminResponse,
  '/filtered-classes': responseHandler.getClassBrowserClientResponse,
  '/get-characters': responseHandler.getCharacters,
  '/post-character': responseHandler.postCharacterResponse,
  notFound: htmlHandler.get404Response,
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const { pathname } = parsedUrl;

  const params = query.parse(parsedUrl.query);
  let acceptedTypes = request.headers.accept && request.headers.accept.split(',');
  acceptedTypes = acceptedTypes || [];

  if (urlStruct[pathname]) {
    urlStruct[pathname](request, response, params, acceptedTypes, request.method);
  } else {
    urlStruct.notFound(request, response);
  }
};

http.createServer(onRequest).listen(port);
