import mysql from "mysql2"


const json = {
  "last_name": "Dome",
  "S_quality": "Bad",
  }

const placeholder = Object.keys(json).map(item=> '?').join(',')

console.log(Object.values(json))
/* to be moved to  */
const connection = mysql.createPool({
  host : '127.0.0.1',
  user : 'root',
  password : 'nokian876',
  database : 'biomed'
}).promise()



const query = `UPDATE CUSTOMER_SPECIMEN SET last_name = ?, S_quality= ? WHERE order_id = 987654321`

const [result] = await connection.execute(query, Object.values(json))
console.log(result)

