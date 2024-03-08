import {pool} from "./data.js"


export async function getAllPetOrders(){
  try{
  const [result] = await pool.query('SELECT * FROM PET_SPECIMEN')
  return result
  }catch(err){
    console.log(err)
    return "error"
  }
}

export async function getPendingPetOrder(){
  try{
    const [result] = await pool.query("SELECT * FROM PET_SPECIMEN WHERE status = 'PENDING'")
    return result
  }catch(err){
    console.log(err)
    return "error"
  }
}

export async function getPetOrderByUser(user){
  try{
  const [result] = await pool.query(`SELECT * FROM PET_SPECIMEN WHERE user ='${user}' `)
  return result
  }catch(err){
    console.log(err)
    return "error"
  }
}

export async function vendorPetOrderItems(){
  try{
  const [result] = await pool.query('SELECT * FROM PET_SPECIMEN WHERE user = "YEUNG PO"')
  return result
  }catch(err){
    console.log(err)
    return "error"
  }
}

export async function cancelPetOrder(orderId){
  try{
  const query = `UPDATE PET_SPECIMEN SET status = 'CANCELLED'
WHERE order_id = ${orderId}`

  const [result] = await pool.query(query)
  return result
  }catch(err){
    console.log(err)
    return "error"
  }
}

export async function completePetOrder(orderId){
  try{
  const query = `UPDATE PET_SPECIMEN SET status = 'DONE'
WHERE order_id = ${orderId}`

  const [result] = await pool.query(query)
  return result
  }catch(err){
    console.log(err)
    return "error"
  }
}


export async function createPetOrder(orderDetails){
  try{
    const placeholder = Object.keys(orderDetails).map(item=> '?').join(',')

    const query = `INSERT INTO PET_SPECIMEN (${Object.keys(orderDetails).join(',')}) VALUES (${placeholder})`

    const [result] = await pool.execute(query, Object.values(orderDetails))
    console.log(result)

    if (result.affectedRows > 0){
      return 'successful'
    } else{
      return 'unsuccessful'
    }
  }catch(err){
    console.log(err)
    return "error"
  }
}


export async function updatePetOrderDetails(orderId, updatedInfo){

  try{
    const query = `UPDATE PET_SPECIMEN SET ? WHERE order_id = ?`
    const [result] = await pool.query(query,[updatedInfo, orderId])
    if (result.affectedRows > 0){
      return 'successful'
    } else{
      return 'unsuccessful'
    }
  }catch(err){
    console.log(err)
    return "error"
  }
}
