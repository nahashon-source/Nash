import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import axios from 'axios';

const stories = [
  {
    id: 1,
    title: "Restoring the Amazon Rainforest",
    content: "Through community efforts and sustainable practices, we've helped restore over 1,000 hectares of rainforest...",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    organization: "Rainforest Alliance",
    date: "2024-03-01"
  },
  {
    id: 2,
    title: "Marine Life Conservation Success",
    content: "Our recent initiative has successfully protected endangered sea turtles and their nesting sites...",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    organization: "Ocean Conservation Initiative",
    date: "2024-02-28"
  },
  {
    id: 3,
    title: "Wildlife Protection Achievement",
    content: "Thanks to donor support, we've established a new sanctuary for endangered species...",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    organization: "Wildlife Protection Fund",
    date: "2024-02-25"
  }
];

export default function Stories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [date, setDate] = useState(new Date()); // Automatically updating date

  const formik = useFormik({
    initialValues: {
      organization: '',
      title: '',
      content: '',
      image: '',
      date: date.toISOString()
    },
    onSubmit: (values) => {
      console.log('Form data:', values);
    }
  });

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setDate(now);
      formik.setFieldValue('date', now.toISOString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextStory, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-200 via-green-300 to-green-500">
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl mt-10">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Post a Story</h2>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700">Organization Name</label>
              <input
                type="text"
                name="organization"
                placeholder="Enter your organization name"
                value={formik.values.organization}
                onChange={formik.handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter story title"
                value={formik.values.title}
                onChange={formik.handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Content</label>
              <textarea
                name="content"
                placeholder="Enter story content"
                value={formik.values.content}
                onChange={formik.handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="6"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Image URL (Optional)</label>
              <input
                type="text"
                name="image"
                placeholder="Enter image URL"
                value={formik.values.image}
                onChange={formik.handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Current Date and Time</label>
              <p className="text-gray-600">{date.toLocaleString()}</p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold text-lg rounded-md hover:bg-green-700 transition duration-200"
            >
              Post Story
            </button>
          </form>

          <h3 className="text-2xl font-bold text-center text-green-700 mt-12 mb-6">Success Stories</h3>

          <div className="relative">
            <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
              <img
                src={stories[currentIndex].image}
                alt={stories[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 flex justify-between items-center">
              <button
                onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length)}
                className="bg-green-600 text-white rounded-full p-4 m-4 shadow-md hover:bg-green-700"
              >
                &lt;
              </button>

              <button
                onClick={nextStory}
                className="bg-green-600 text-white rounded-full p-4 m-4 shadow-md hover:bg-green-700"
              >
                &gt;
              </button>
            </div>

            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 w-full">
              <h4 className="text-xl text-white font-semibold">{stories[currentIndex].title}</h4>
              <p className="text-sm text-white">{stories[currentIndex].organization}</p>
              <p className="text-sm text-white">{new Date(stories[currentIndex].date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white py-6 mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
          <p className="text-lg">&copy; 2024 EcoGuard. All rights reserved.</p>
          <p className="mt-2 text-sm">Your support helps protect the planet for future generations.</p>

          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} className="text-green-600 hover:text-green-800" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} className="text-blue-600 hover:text-blue-800" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="text-pink-600 hover:text-pink-800" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} className="text-blue-400 hover:text-blue-600" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
