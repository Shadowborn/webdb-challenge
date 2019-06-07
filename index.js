// Manage Roles (id, name)
const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');


const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

// list all projects
server.get('/api/projects', async (req, res) => {
  // get the projects from the database
  try {
    const projects = await db('projects'); // all the records from the table
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

// list a role by id
server.get('/api/projects/:id', async (req, res) => {
  // get the projects from the database
  try {
    const role = await db('projects')
      .where({ id: req.params.id })
      .first();
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json(error);
  }
});

const errors = {
  '19': 'Another record with that value exists',
};

// create projects
server.post('/api/projects', async (req, res) => {
  try {
    const [id] = await db('projects').insert(req.body);

    const role = await db('projects')
      .where({ id })
      .first();

    res.status(201).json(role);
  } catch (error) {
    const message = errors[error.errno] || 'We ran into an error';
    res.status(500).json({ message, error });
  }
});





// list all actions
server.get('/api/actions', async (req, res) => {
    // get the actions from the database
    try {
      const actions = await db('actions'); // all the records from the table
      res.status(200).json(actions);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  // list a role by id
  server.get('/api/actions/:id', async (req, res) => {
    // get the actions from the database
    try {
      const role = await db('actions')
        .where({ id: req.params.id })
        .first();
      res.status(200).json(role);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  // create actions
  server.post('/api/actions', async (req, res) => {
    try {
      const [id] = await db('actions').insert(req.body);
  
      const role = await db('actions')
        .where({ id })
        .first();
  
      res.status(201).json(role);
    } catch (error) {
      const message = errors[error.errno] || 'We ran into an error';
      res.status(500).json({ message, error });
    }
  });



const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);