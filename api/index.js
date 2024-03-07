import express from "express"
import cors from 'cors'
import {getAllPetOrders, createPetOrder,getPendingPetOrder, getPetOrderByUser, cancelPetOrder, completePetOrder, updatePetOrderDetails, vendorPetOrderItems} from './pet-service.js'
import { getAllCustomerOrders, createCustomerOrder, getPendingCustomerOrder, getCustomerOrderByUser, cancelCustomerOrder, completeCustomerOrder, updateCustomerOrderDetails, vendorCustomerOrderItems,  } from './customer-service.js'

// initialization
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(cors())



app.get("/", (req, res) => res.send("Express on Vercel"));


app.get('/view-all-customers', async (req, res)=>{
  const result = await getAllCustomerOrders()
  console.log(result)
  res.send(result)
})

app.get('/view-all-pets', async (req, res)=>{
  const result = await getAllPetOrders()
  console.log(result)
  res.send(result)
})


app.post('/create-customer', async (req, res)=>{
  const details = req.body
  console.log(req.body)
  const status = await createCustomerOrder(details)
  res.send(status)
})

app.post('/create-pet', async (req, res)=>{
  const details = req.body
  // console.log(JSON.parse(details) 
  const status = await createPetOrder(details)
  res.send(status)
})


app.get('/pending-customer', async (req, res)=>{
  const result = await getPendingCustomerOrder()
  res.send(result)
})

app.get('/pending-pet', async (req, res)=>{
  const result = await getPendingPetOrder()
  res.send(result)
})

app.get('/vendor/customer', async(req,res)=>{
  const result = await vendorCustomerOrderItems()
  res.send(result)
})

app.get('/vendor/pet', async (req, res)=>{
  const result = await vendorPetOrderItems()
  res.send(result)
})

// view orders by user
app.get('/order-customer', async (req, res)=>{
  console.log(req.query.user)
  const result = await getCustomerOrderByUser(req.query.user)
  res.send(result)
})

app.get('/order-pet', async (req, res)=>{
  console.log(req.query.user)
  const result = await getPetOrderByUser(req.query.user)
  res.send(result)
})


app.get('/cancel-customer/:orderid', async (req,res)=>{
  let orderID = req.params.orderid
  console.log(orderID)
  const result = await cancelCustomerOrder(orderID)
  console.log(result)
  res.send(result)
})

app.get('/cancel-pet/:orderid', async (req,res)=>{
  let orderID = req.params.orderid
  console.log(orderID)
  const result = await cancelPetOrder(orderID)
  console.log(result)
  res.send(result)
})


app.get('/done-customer/:orderid', async (req,res)=>{
  let orderid = req.params.orderid
  console.log(orderid)
  const result = await completeCustomerOrder(orderid)
  console.log(result)
  res.send(result)
})

app.get('/done-pet/:orderid', async (req,res)=>{
  let orderid = req.params.orderid
  console.log(orderid)
  const result = await completePetOrder(orderid)
  console.log(result)
  res.send(result)
})


app.put('/update-customer/:orderid', async (req,res)=>{
  let orderID = req.params.orderid
  let updateInfo = req.body
  const result = await updateCustomerOrderDetails(orderID, updateInfo)
  res.send(result)
})

app.put('/update-pet/:orderid', async (req,res)=>{
  let orderID = req.params.orderid
  let updateInfo = req.body
  const result = await updatePetOrderDetails(orderID, updateInfo)
  res.send(result)
})

app.listen(3000,()=>{
  console.log('listeneing on 5050')
})

