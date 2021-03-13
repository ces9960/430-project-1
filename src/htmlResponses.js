const fs = require('fs');

const imagePage = fs.readFileSync(`${__dirname}/../client/image-page.html`);
const classBrowserPage = fs.readFileSync(`${__dirname}/../client/class-browser-client.html`);
const errorPage = fs.readFileSync(`${__dirname}/../client/error-page.html`);
const indexPage = fs.readFileSync(`${__dirname}/../client/index.html`);
const savedCharactersPage = fs.readFileSync(`${__dirname}/../client/saved-characters-client.html`);
const imageFile = fs.readFileSync(`${__dirname}/../client/media/p1-image.png`);
const stylesheetFile = fs.readFileSync(`${__dirname}/../client/default-styles.css`);

const getImageResponse = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(imagePage);
  response.end();
};
const getClassBrowserClientResponse = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(classBrowserPage);
  response.end();
};
const get404Response = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(errorPage);
  response.end();
};
const getIndexResponse = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(indexPage);
  response.end();
};
const getSavedCharactersResponse = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(savedCharactersPage);
  response.end();
};

const getImageFileResponse = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(imageFile);
  response.end();
};

const getStylesheetResponse = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(stylesheetFile);
  response.end();
};

module.exports = {
  get404Response,
  getImageResponse,
  getClassBrowserClientResponse,
  getIndexResponse,
  getSavedCharactersResponse,
  getImageFileResponse,
  getStylesheetResponse,
};
