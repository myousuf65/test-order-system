import {pool} from "./data.js"


export async function getAllCustomerOrders(){
  try{
    const [result] = await pool.query('SELECT * FROM CUSTOMER_SPECIMEN')
    return result
  }catch(err){
    console.log(err)
    return "error"
  }
}

export async function getPendingCustomerOrder(){

  try{
    const [result] = await pool.query("SELECT * FROM CUSTOMER_SPECIMEN WHERE status = 'PENDING'")
    return result
  }catch(err){
    console.log(err)
    return "error"
  }
}

export async function getCustomerOrderByUser(user){
  try{
    const [result] = await pool.query(`SELECT * FROM CUSTOMER_SPECIMEN WHERE user ='${user}' `)
    return result
  }catch(err){
    console.log(err)
    return "error"
  }
}

export async function vendorCustomerOrderItems(){

  try{
    const [result] = await pool.query('SELECT * FROM CUSTOMER_SPECIMEN WHERE user = "YEUNG PO"')
    return result
  }catch(err){
    console.log(err)
    return "error"
  }
}

export async function cancelCustomerOrder(orderId){
  try{
    const query = `UPDATE CUSTOMER_SPECIMEN SET status = 'CANCELLED'
WHERE order_id = ${orderId}`

    const [result] = await pool.query(query)
    return result
  }catch(err){
    console.log(err)
    return "error"
  }

}

export async function completeCustomerOrder(orderId){

  try{
    const query = `UPDATE CUSTOMER_SPECIMEN SET status = 'DONE'
WHERE order_id = ${orderId}`

    const [result] = await pool.query(query)
    return result
  }catch(err){
    console.log(err)
    return "error"
  }
}

export async function createCustomerOrder(orderDetails){
  const placeholder = Object.keys(orderDetails).map(item=> '?').join(',')

  try{
    const query = `INSERT INTO CUSTOMER_SPECIMEN (${Object.keys(orderDetails).join(',')}) VALUES (${placeholder})`

    const [result] = await pool.execute(query, Object.values(orderDetails))
    console.log(result)

    if (result.affectedRows > 0){
      return 'successful'
    } else{
      return 'unsuccessful'
    }
  }catch(err){
    console.log(err)
    return 'error'
  }
}




export async function updateCustomerOrderDetails(orderId, updatedInfo) {
  const query = `UPDATE CUSTOMER_SPECIMEN SET ? WHERE order_id = ?`;
  try {
    const [result] = await pool.query(query, [updatedInfo, orderId]);

    if (result.affectedRows > 0) {
      return 'successful';
    } else {
      return 'unsuccessful';
    }
  } catch (err) {
    console.error(err);
    return 'error'; // You can also return an object with more error details if needed.
  }
}
