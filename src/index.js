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
  '/image-page': htmlHandler.getImageResponse,
  '/filtered-classes': responseHandler.getClassBrowserClientResponse,
  '/get-characters': responseHandler.getCharacters,
  '/post-character': responseHandler.postCharacterResponse,
  '/image-file': htmlHandler.getImageFileResponse,
  '/stylesheet': htmlHandler.getStylesheetResponse,
  notFound: htmlHandler.get404Response,
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const { pathname } = parsedUrl;

  const params = query.parse(parsedUrl.query);
  let acceptedTypes = request.headers.accept && request.headers.accept.split(',');
  acceptedTypes = acceptedTypes || [];

  if (request.method === 'POST') {
    if (parsedUrl.pathname === '/post-character') {
      const body = [];

      request.on('error', (err) => {
        console.dir(err);
        response.statusCode = 400;
        response.end();
      });
      response.on('data', (chunk) => {
        body.push(chunk);
      });
      response.on('end', () => {
        const bodyString = Buffer.concat(body).toString();
        const bodyParams = query.parse(bodyString);
        responseHandler.postCharacterResponse(request, response, bodyParams);
      });
    }
    return;
  }

  if (urlStruct[pathname]) {
    urlStruct[pathname](request, response, params, acceptedTypes, request.method);
  } else {
    urlStruct.notFound(request, response);
  }
};

http.createServer(onRequest).listen(port);
