const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => res.json(diagnostics));

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  const newDiagnostic = req.body;
  // add updated object to notes array
  diagnostics.push(newDiagnostic);

  // updated db.json file
  fs.writeFile(`../db/diagnostics.json`, JSON.stringify(diagnostics, null, 2), err =>
    err ? console.error(err) : console.info(`New diagnostic has been written to JSON file`)
  );
});

module.exports = diagnostics;
