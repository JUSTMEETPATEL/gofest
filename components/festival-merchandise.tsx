'use client'

import { useState } from 'react'
import { Search, ShoppingCart, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Mock data for products
const products = [
  { id: 1, name: "Fest T-Shirt", price: 250, category: "Clothing", image: "/img/tshirt.jpg?height=200&width=200", description: "Comfortable cotton t-shirt with festival logo" },
  { id: 2, name: "Festival Cap", price: 15, category: "Accessories", image: "/img/cap.jpg?height=200&width=200", description: "Adjustable cap with embroidered festival logo" },
  { id: 3, name: "Festival Sticker Pack", price: 25, category: "Accessories", image: "/img/sticker.jpg?height=200&width=200", description: "Set of 5 waterproof festival-themed stickers" },
  { id: 4, name: "Festival Tote Bag", price: 200, category: "Bags", image: "/img/tote.jpg?height=200&width=200", description: "Durable canvas tote bag with festival artwork" },
  { id: 5, name: "Festival School Bag", price: 35, category: "Bags", image: "/img/bag.jpg?height=200&width=200", description: "Spacious backpack with multiple compartments and festival design" },
]

export function FestivalMerchandise() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("name")
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Filter and sort products
  const filteredProducts = products
    .filter(product => 
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "price_asc") return a.price - b.price
      if (sortBy === "price_desc") return b.price - a.price
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Festival Merchandise</h1>
      
      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          className="flex-grow"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            <SelectItem value="Clothing">Clothing</SelectItem>
            <SelectItem value="Accessories">Accessories</SelectItem>
            <SelectItem value="Bags">Bags</SelectItem>
          </SelectContent>
        </Select>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="price_asc">Price: Low to High</SelectItem>
            <SelectItem value="price_desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-400 mb-2">₹{product.price}</p>
              <p className="text-sm text-gray-300 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => setSelectedProduct(product)}>
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-800 text-gray-100">
                    <DialogHeader>
                      <DialogTitle>{product.name}</DialogTitle>
                      <DialogDescription>
                        <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
                        <p className="text-lg font-semibold mb-2">₹{product.price}</p>
                        <p className="text-gray-300 mb-4">{product.description}</p>
                        <Button className="w-full">
                          <ShoppingCart className="mr-2 h-4 w-4" /> 
                        </Button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <Button>
                  <ShoppingCart className="mr-2 h-4 w-4" /> 
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}