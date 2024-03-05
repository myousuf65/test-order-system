import {pool} from "./data.js"


export async function getAllPetOrders(){
  const [result] = await pool.query('SELECT * FROM PET_SPECIMEN')
  return result
}

export async function getPendingPetOrder(){
  const [result] = await pool.query("SELECT * FROM PET_SPECIMEN WHERE status = 'PENDING'")
  return result
}

export async function getPetOrderByUser(user){
  const [result] = await pool.query(`SELECT * FROM PET_SPECIMEN WHERE user ='${user}' `)
  return result
}

export async function vendorPetOrderItems(){
  const [result] = await pool.query('SELECT * FROM PET_SPECIMEN WHERE VENDOR == "YEUNG PO"')
  return result
}

export async function cancelPetOrder(orderId){
  const query = `UPDATE PET_SPECIMEN SET status = 'CANCELLED'
WHERE order_id = ${orderId}`

  const [result] = await pool.query(query)
  return result
}

export async function completePetOrder(orderId){
  const query = `UPDATE PET_SPECIMEN SET status = 'DONE'
WHERE order_id = ${orderId}`

  const [result] = await pool.query(query)
  return result
}


export async function createPetOrder(orderDetails){
  const placeholder = Object.keys(orderDetails).map(item=> '?').join(',')

  const query = `INSERT INTO PET_SPECIMEN (${Object.keys(orderDetails).join(',')}) VALUES (${placeholder})`

  const [result] = await pool.execute(query, Object.values(orderDetails))
  console.log(result)

  if (result.affectedRows > 0){
    return 'successful'
  } else{
    return 'unsuccessful'
  }
}


export async function updatePetOrderDetails(orderId, updatedInfo){
  const query = `UPDATE PET_SPECIMEN SET ? WHERE order_id = ?`
  const [result] = await pool.query(query,[updatedInfo, orderId])
  if (result.affectedRows > 0){
    return 'successful'
  } else{
    return 'unsuccessful'
  }
}
