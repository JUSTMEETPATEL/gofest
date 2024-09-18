const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');
require('dotenv').config(); // Load environment variables

const app = express();

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_SECRET
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8000, () => {
    console.log('Server is running on port 8000');
    console.log(process.env.RAZORPAY_ID);
    console.log(process.env.RAZORPAY_SECRET);
});

app.post('/order', async (req, res) => {
    try {
        const newOrder = await instance.orders.create({
            amount: 100 * 100, // Amount in paise
            currency: 'INR',
            receipt: 'CO_RP_' + Date.now()
        });
        res.json({
            amount: newOrder.amount,
            orderId: newOrder.id
        });
    } catch (err) {
        console.error('Error creating order:', err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

app.get('/order', async (req, res) => {
    try {
        // Example logic for GET /order
        res.json({ message: 'GET /order endpoint is working' });
    } catch (err) {
        console.error('Error fetching order:', err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});