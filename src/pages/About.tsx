import React from 'react'
import PageLayout from './PageLayout'


const About:React.FC = () => {


  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto p-6 bg-zinc-800 text-zinc-100 rounded-lg shadow mt-8">
        <h2 className="text-3xl font-bold mb-4 text-primary-400">About Us</h2>
        <p className="mb-4 text-zinc-300">
          Welcome to <span className="text-primary-400 font-semibold">Gaming Store</span>! We are passionate gamers and tech enthusiasts dedicated to bringing you the best in gaming gear, accessories, and hardware. Our mission is to empower every gamer—casual or pro—with top-quality products and unbeatable service.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-primary-300">Our Story</h3>
        <p className="mb-4 text-zinc-300">
          Founded in 2025, Gaming Store started as a small team of friends who wanted to make high-end gaming equipment accessible to everyone. Today, we serve thousands of gamers across the country, always staying true to our roots: community, quality, and innovation.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-primary-300">Why Shop With Us?</h3>
        <ul className="list-disc pl-6 mb-4 text-zinc-300">
          <li>Curated selection of the latest gaming products</li>
          <li>Fast, reliable shipping</li>
          <li>Expert support from real gamers</li>
          <li>Exclusive deals and loyalty rewards</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 text-primary-300">Join Our Community</h3>
        <p className="text-zinc-300">
          Follow us on social media, join our newsletter, or drop by our store to connect with fellow gamers. Thank you for making us your go-to gaming destination!
        </p>
      </div>
    </PageLayout>
  )
}

export default About