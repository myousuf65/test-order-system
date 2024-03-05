import {pool} from "./data.js"


export async function getAllCustomerOrders(){
  const [result] = await pool.query('SELECT * FROM CUSTOMER_SPECIMEN')
  return result
}

export async function getPendingCustomerOrder(){
  const [result] = await pool.query("SELECT * FROM CUSTOMER_SPECIMEN WHERE status = 'PENDING'")
  return result
}

export async function getCustomerOrderByUser(user){
  const [result] = await pool.query(`SELECT * FROM CUSTOMER_SPECIMEN WHERE user ='${user}' `)
  return result
}

export async function vendorCustomerOrderItems(){
  const [result] = await pool.query('SELECT * FROM CUSTOMER_SPECIMEN WHERE VENDOR == "YEUNG PO"')
  return result
}

export async function cancelCustomerOrder(orderId){
  const query = `UPDATE CUSTOMER_SPECIMEN SET status = 'CANCELLED'
WHERE order_id = ${orderId}`

  const [result] = await pool.query(query)
  return result
}

export async function completeCustomerOrder(orderId){
  const query = `UPDATE CUSTOMER_SPECIMEN SET status = 'DONE'
WHERE order_id = ${orderId}`

  const [result] = await pool.query(query)
  return result
}

export async function createCustomerOrder(orderDetails){
  const placeholder = Object.keys(orderDetails).map(item=> '?').join(',')

  const query = `INSERT INTO CUSTOMER_SPECIMEN (${Object.keys(orderDetails).join(',')}) VALUES (${placeholder})`

  const [result] = await pool.execute(query, Object.values(orderDetails))
  console.log(result)

  if (result.affectedRows > 0){
    return 'successful'
  } else{
    return 'unsuccessful'
  }
}


export async function updateCustomerOrderDetails(orderId, updatedInfo){
  const query = `UPDATE CUSTOMER_SPECIMEN SET ? WHERE order_id = ?`
  const [result] = await pool.query(query,[updatedInfo, orderId])
  if (result.affectedRows > 0){
    return 'successful'
  } else{
    return 'unsuccessful'
  }
}
