'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation' // For redirecting to /profile
import { toast } from 'react-hot-toast' // For showing the toast notification
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusIcon, TrashIcon } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'

// Initialize the Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)

export function EventRegistration() {
  const router = useRouter(); // Initialize the router for redirection
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [teamMembers, setTeamMembers] = useState([''])

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, ''])
  }

  const removeTeamMember = (index: number) => {
    const newTeamMembers = teamMembers.filter((_, i) => i !== index)
    setTeamMembers(newTeamMembers)
  }

  const handleTeamMemberChange = (index: number, value: string) => {
    const newTeamMembers = [...teamMembers]
    newTeamMembers[index] = value
    setTeamMembers(newTeamMembers)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Insert the form data into Supabase
    const { data, error } = await supabase
      .from('event_registration') // Your table name in Supabase
      .insert([
        {
          name,
          email,
          contact,
          team_members: teamMembers
        }
      ])

    if (error) {
      console.error('Error inserting data:', error.message)
    } else {
      console.log('Data inserted successfully:', data)

      // Show toast notification for success
      toast.success('Registered Successfully!')

      // Redirect to profile page after registration
      router.push('/profile')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-400">Event Registration</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact">Contact Number</Label>
            <Input
              id="contact"
              placeholder="Enter your contact number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Label>Team Members</Label>
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={member}
                  onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                  placeholder={`Team member ${index + 1}`}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                {index > 0 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => removeTeamMember(index)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={addTeamMember}
              className="mt-2 w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
            >
              <PlusIcon className="h-4 w-4 mr-2" /> Add Team Member
            </Button>
          </div>
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors"
          >
            Register for Event
          </Button>
        </form>
      </div>
    </div>
  )
}
