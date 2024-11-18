import React from 'react';
import { BookOpen } from 'lucide-react';

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
  return (
    <div className="pt-16">
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="mx-auto h-12 w-12 text-green-600" />
            <h1 className="mt-4 text-4xl font-bold text-green-900">Success Stories</h1>
            <p className="mt-2 text-lg text-gray-600">Read about the impact we're making together</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-green-600 font-medium">{story.organization}</span>
                  <span className="text-sm text-gray-500">{new Date(story.date).toLocaleDateString()}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-600">{story.content}</p>
                <button className="mt-4 text-green-600 font-medium hover:text-green-700">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}