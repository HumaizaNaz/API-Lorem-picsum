"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import _ from 'lodash'

const Page = () => {
  const [images, setImages] = useState([]) 
  const [showGallery, setShowGallery] = useState(false) 

  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data
      setImages(data)
      setShowGallery(true) 
    } catch (error) {
      console.error("Error Fetching Images", error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      {}
      <button
        onClick={getImages}
        className='px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 mb-10'>
        Get Images
      </button>

      {}
      {showGallery && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-xl'>
          {images.map((elem, i) => (
            <div key={i} className="relative group">
              <img 
                src={_.get(elem, 'download_url', 'https://via.placeholder.com/300')}
                alt={`Image ${i}`}
                className='w-full h-auto rounded-lg shadow-md transform group-hover:scale-105 transition duration-300 ease-in-out' 
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Page
