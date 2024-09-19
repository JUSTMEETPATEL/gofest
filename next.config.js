/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    // nextConfig,
    env: {
        RAZORPAY_ID: process.env.RAZORPAY_ID,
        NEXT_PUBLIC_SUPABASE_URL : process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        NEXT_PUBLIC_SUPABASE_SECRET_KEY : process.env.NEXT_PUBLIC_SUPABASE_SECRET_KEY,  
        NEXT_PUBLIC_RAZORPAY_ID : process.env.NEXT_PUBLIC_RAZORPAY_ID,  
        RAZORPAY_SECRET : process.env.RAZORPAY_SECRET,
    }

}
