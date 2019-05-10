const {Client} = require('pg');

const client = new Client({
  user: 'jaimeSolo',
  host: 'localhost',
  database: 'LACRIME',
  password: 'ilovetesting',
  port: '5432'
});

client.connect((err)=>{
  if(err) throw new Error(err);
  else console.log('connected to db');
});



module.exports = client;
