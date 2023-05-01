const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};

Query('SELECT * FROM contacts').then(console.log);

// client.query('SELECT * FROM contacts').then((result) => console.log(result));

// outra forma de fazer
// client.query('SELECT * FROM contacts').then(console.log);
