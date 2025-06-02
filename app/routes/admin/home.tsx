import React from 'react'

const home = () => {
  return (
 <main className="glassmorphism flex-center min-h-screen text-center p-10">
  <div>
    <h1 className="text-4xl font-bold mb-9">Welcome to Haven Travel 🌍</h1>
    <p className="text-lg text-gray-600 mb-9">
      This is a front-end React dashboard with basic auth via Appwrite. 
      Built to explore dynamic UIs, simple routing, and layout flow. 
      Local auth works — but no data is stored. Just vibes.
    </p>
    <p className="text-sm text-gray-400 italic mt-4">
  UI Showcase · Appwrite Auth (Local) · No persistent data
</p>

    <a href="/dashboard">
      <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
        Enter Dashboard →
      </button>
    </a>
    
  </div>
  
</main>

  )
}

export default home