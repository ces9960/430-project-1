const fs = require('fs');

const adminPage = fs.readFileSync(`${__dirname}/../client/admin-page.html`);
const classBrowserPage = fs.readFileSync(`${__dirname}/../client/class-browser-client.html`);
const errorPage = fs.readFileSync(`${__dirname}/../client/error-page.html`);
const indexPage = fs.readFileSync(`${__dirname}/../client/index.html`);
const savedClassesPage = fs.readFileSync(`${__dirname}/../client/saved-classes-client.html`);

const getAdminResponse = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(adminPage);
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
const getSavedClassesResponse = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(savedClassesPage);
  response.end();
};

module.exports = {
  get404Response,
  getAdminResponse,
  getClassBrowserClientResponse,
  getIndexResponse,
  getSavedClassesResponse,
};
