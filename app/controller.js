import express from "express"
import cors from 'cors'
import { vendorOrderItems, getalldata, cancelOrder, getPendingOrder, updateOrderDetails, getOrderByUser, completedOrder, createCustomerOrder, createPetOrder } from "./service.js"


// initialization
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(cors())



app.get('/view-all-customers', async (req, res)=>{
  const result = await getalldata()
  console.log(result)
  res.send(result)
})

app.get('/view-all-pets', async (req, res)=>{
  const result = await getalldata()
  console.log(result)
  res.send(result)
})


app.post('/create-customer', async (req, res)=>{
  const details = req.body
  // console.log(JSON.parse(details))
  const status = await createCustomerOrder(details)
  res.send(status)
})

app.post('/create-pet', async (req, res)=>{
  const details = req.body
  // console.log(JSON.parse(details))
  const status = await createPetOrder(details)
  res.send(status)
})


app.get('/pending-customer', async (req, res)=>{
  const result = await getPendingOrder()
  res.send(result)
})

app.get('/pending-pet', async (req, res)=>{
  const result = await getPendingOrder()
  res.send(result)
})


// view orders by user
app.get('/order-customer', async (req, res)=>{
  console.log(req.query.user)
  const result = await getOrderByUser(req.query.user)
  res.send(result)
})

app.get('/order-pet', async (req, res)=>{
  console.log(req.query.user)
  const result = await getOrderByUser(req.query.user)
  res.send(result)
})


app.get('/cancel-customer/:orderid', async (req,res)=>{
  let orderID = req.params.orderid
  console.log(orderID)
  const result = await cancelOrder(orderID)
  console.log(result)
  res.send(result)
})

app.get('/cancel-pet/:orderid', async (req,res)=>{
  let orderID = req.params.orderid
  console.log(orderID)
  const result = await cancelOrder(orderID)
  console.log(result)
  res.send(result)
})


app.get('/done-customer/:orderid', async (req,res)=>{
  let orderID = req.params.orderid
  console.log(orderID)
  const result = await completedOrder(orderID)
  console.log(result)
  res.send(result)
})


app.get('/done-pet/:orderid', async (req,res)=>{
  let orderID = req.params.orderid
  console.log(orderID)
  const result = await completedOrder(orderID)
  console.log(result)
  res.send(result)
})

app.put('/update-customer/:orderid', async (req,res)=>{
  let orderID = req.params.orderid
  let updateInfo = req.body
  const result = await updateOrderDetails(orderID, updateInfo)
  res.send(result)
})

app.put('/update-pet/:orderid', async (req,res)=>{
  let orderID = req.params.orderid
  let updateInfo = req.body
  const result = await updateOrderDetails(orderID, updateInfo)
  res.send(result)
})

app.listen(5050,()=>{
  console.log('listeneing on 5050')
})

