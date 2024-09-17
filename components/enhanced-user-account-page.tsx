'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CalendarDays, Download, Eye, MapPin, Package, Truck } from 'lucide-react'

// Mock data
const user = {
  name: "Mukesh Kumar",
  email: "mukesh.kumar@example.com",
  phone: "+91 1234567890",
  avatar: "/placeholder.svg?height=100&width=100"
}

const events = [
  { id: 1, name: "Tech Conference 2023", date: "2023-09-15", venue: "San Francisco Convention Center", status: "Upcoming" },
  { id: 2, name: "Web Dev Workshop", date: "2023-08-01", venue: "Online", status: "Completed" },
  { id: 3, name: "AI Symposium", date: "2023-10-30", venue: "New York Tech Hub", status: "Upcoming" },
]

const orders = [
  { 
    id: 101, 
    date: "2023-07-10", 
    total: 79.99, 
    status: "Delivered",
    items: [
      { name: "Conference T-Shirt", price: 250, image: "/img/tshirt.jpg?height=80&width=80", quantity: 2, size: "L" },
      { name: "Tech Sticker Pack", price: 25, image: "/img/sticker.jpg?height=80&width=80", quantity: 2 }
    ],
    tracking: "1Z999AA1123456784"
  },
  { 
    id: 102, 
    date: "2023-06-22", 
    total: 149.99, 
    status: "Shipped",
    items: [
      { name: "Tote Bag", price: 200, image: "/img/tote.jpg?height=80&width=80", quantity: 1 }
    ],
    tracking: "1Z999AA1123456785"
  },
  { 
    id: 103, 
    date: "2023-05-15", 
    total: 29.99, 
    status: "Delivered",
    items: [
      { name: "School Bag", price: 800, image: "/img/bag.jpg?height=80&width=80", quantity: 1 }
    ],
    tracking: "1Z999AA1123456786"
  },
]

export function EnhancedUserAccountPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="min-h-screen bg-black text-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Account</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-semibold">{user.name}</h2>
                    <p className="text-gray-400">{user.email}</p>
                    <p className="text-gray-400">{user.phone}</p>
                  </div>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="events">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Event Registrations</CardTitle>
                <CardDescription>Your upcoming and past events</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {events.map(event => (
                    <li key={event.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-800 rounded-lg">
                      <div className="mb-2 sm:mb-0">
                        <h3 className="font-semibold">{event.name}</h3>
                        <p className="text-gray-400 flex items-center">
                          <CalendarDays className="w-4 h-4 mr-2" />
                          {event.date}
                        </p>
                        <p className="text-gray-400 flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.venue}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <Badge variant={event.status === "Upcoming" ? "default" : "secondary"}>
                          {event.status}
                        </Badge>
                        <Button size="sm" variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white">
                          <Eye className="w-4 h-4 mr-2" />
                          Details
                        </Button>
                        {event.status === "Upcoming" && (
                          <Button size="sm" variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white">
                            <Download className="w-4 h-4 mr-2" />
                            Ticket
                          </Button>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="orders">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>Your past merchandise purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {orders.map(order => (
                    <li key={order.id} className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex flex-col sm:flex-row justify-between mb-4">
                        <div>
                          <h3 className="font-semibold">Order #{order.id}</h3>
                          <p className="text-gray-400 flex items-center">
                            <CalendarDays className="w-4 h-4 mr-2" />
                            {order.date}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                          <p className="font-semibold">₹{order.total.toFixed(2)}</p>
                          <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>
                            {order.status}
                          </Badge>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
                                <Package className="w-4 h-4 mr-2" />
                                Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-gray-900 text-gray-200">
                              <DialogHeader>
                                <DialogTitle>Order Details</DialogTitle>
                                <DialogDescription>
                                  Order #{order.id} - {order.date}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="mt-4">
                                <h4 className="font-semibold mb-2">Items:</h4>
                                <ul className="space-y-2">
                                  {order.items.map((item, index) => (
                                    <li key={index} className="flex items-center space-x-4">
                                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                      <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-gray-400">
                                          ₹{item.price.toFixed(2)} x {item.quantity}
                                          {item.size && ` - Size: ₹{item.size}`}
                                        </p>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-4">
                                <h4 className="font-semibold mb-2">Tracking:</h4>
                                <p className="text-gray-400 flex items-center">
                                  <Truck className="w-4 h-4 mr-2" />
                                  {order.tracking}
                                </p>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {order.items.map((item, index) => (
                          <img key={index} src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}