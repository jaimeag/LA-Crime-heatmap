const express = require('express');
const app = express();
const client = require('./database.js');

const yearRouter = express.Router();
const yearCache = {};


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

yearRouter.get('/:yr',(req, res)=>{

  if(yearCache[req.params.yr]) {
    console.log('pulled from cache');
    return res.send(JSON.stringify(yearCache[req.params.yr]));
  }

  client.query(`SELECT * FROM "CrimeTable" WHERE EXTRACT(YEAR FROM dateoccured) = ${req.params.yr}`, (err,result) => {
    if(err) res.send(err);
    const convertRows = {};
    result.rows.forEach((row)=>{
      if(!convertRows[row.description]){
        convertRows[row.description] = [];
      }
      if(row.location != null && row.location != "(0,0)"){
        const location = row.location;
        const commaLocation = location.indexOf(',')
        convertRows[row.description].push({
          lat: parseFloat(row.location.substring(1,commaLocation)),
          lng: parseFloat(row.location.substring(commaLocation + 1, row.location.length - 1)),
        });
      }
    });
    if(!yearCache[req.params.yr]){
      yearCache[req.params.yr] = convertRows;
      console.log('added to cache!');
    }
    res.send(JSON.stringify(convertRows));
  });
});

app.get('/', (req,res)=> {
  // client.query('SELECT * FROM "CrimeTable" WHERE EXTRACT(YEAR FROM dateoccured) = 2015 LIMIT 20000',(err,results)=>{
  //
  //   res.send(results);
  res.send('GFYS');
});



app.use('/year', yearRouter);

app.listen(3000, ()=>{console.log('app listening on port 3000')})
