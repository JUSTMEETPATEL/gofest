const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const Razorpay = require("razorpay")

const instance = new Razorpay({
    key_id: 'rzp_test_uSYhqUZMk386dy',
    key_secret: 'caeXoIJA102f6d0J5KP0qHlt'
})

app.listen(8000)
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/order', async (req, res)=>{
    try {
        const newOrder = await instance.orders.create({
            amount: 100*100,
            receipt: 'CO_RP_'+Date.now()
        })
        res.json({
            amount: newOrder.amount,
            orderId: newOrder.id
        })
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})

app.get('/order', async (req, res) => {
    try {
        // Example: Fetch a list of orders (this is a placeholder, replace with actual logic)
        const orders = await instance.orders.all(); // Assuming `instance.orders.all()` fetches all orders
        res.json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});