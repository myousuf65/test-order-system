import mysql from "mysql2"

export const pool = mysql.createPool({
  host : '127.0.0.1',
  user : '',
  password : '',
  database : ''
}).promise()

// const result = await pool.query('show tables')
// console.log(result)

