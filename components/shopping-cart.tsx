'use client';

import { useState } from 'react';
import useRazorpay from 'react-razorpay';
import { Contact, Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
require('dotenv').config();

declare global {
  interface Window {
    Razorpay: any;
  }
}

// Mock data for cart items
const initialCartItems = [
  { id: 1, name: 'Sticker', price: 25, image: '/img/sticker.jpg?height=80&width=80', quantity: 1 },
  { id: 2, name: 'T-Shirt', price: 250, image: '/img/tshirt.jpg?height=80&width=80', quantity: 1 },
  { id: 3, name: 'Tote Bag', price: 200, image: '/img/tote.jpg?height=80&width=80', quantity: 2 },
];

export function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: total * 100 }), // Adjust payload 
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
        amount: (total * 100).toString(),
        currency: "INR",
        name: "PSVM",
        description: "Test Transaction",
        order_id: data.orderId,
        handler: function (response: any) {
          // Handle successful payment here
          console.log("Payment Successful", response);
          window.location.href = "/profile"
        },
        // prefill: {
        //   name: "Meet Patel",
        //   email: "justmeetpatel@gmail.com",
        //   contact: "6355728962",
        // },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Error during payment initialization:', error);
      alert('Failed to initiate payment. Please try again later.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Razorpay initialization
  const Razorpay = useRazorpay();

  // const payNow = async () => {
  //   try {
  //     const response = await fetch('/api/order', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ amount: total * 100 }), // Adjust payload as needed
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     const options = {
  //       key: process.env.RAZORPAY_ID!,
  //       amount: (total * 100).toString(),
  //       currency: "INR",
  //       name: "PSVM",
  //       description: "Test Transaction",
  //       order_id: data.orderId,
  //       handler: function (response: any) {
  //         // Handle successful payment here
  //       }
  //     };
  //     const rzp1 = new Razorpay(options);
  //     rzp1.open();
  //   } catch (error) {
  //     console.error('Error during payment initialization:', error);
  //     alert('Failed to initiate payment. Please try again later.');
  //   }
  // };

  return (
    <div className="min-h-screen bg-black text-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Shopping Cart</h1>

        <div className="space-y-8">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-400">₹{item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => removeItem(item.id)}
                className="bg-red-600 hover:bg-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {cartItems.length > 0 ? (
          <div className="mt-8 bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between items-center text-xl">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <Button
              className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-lg font-semibold transition-colors"
              onClick={handlePayment}
              disabled={isProcessing}
            >
              Proceed to Checkout
            </Button>
          </div>
        ) : (
          <div className="text-center mt-12">
            <p className="text-2xl">Your cart is empty</p>
            <Button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-lg font-semibold transition-colors">
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}