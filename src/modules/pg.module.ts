import {Pool} from 'pg';

const pg = new Pool({
   user: process.env.PG_USER,
   host: process.env.PG_HOST,
   database: process.env.PG_DATABASE,
   password: process.env.PG_PASSWORD,
   port: Number(process.env.PG_PORT)
});

export {pg}
