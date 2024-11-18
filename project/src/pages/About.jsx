import React from 'react';
import { TreePine, Heart, Users, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Heart, label: 'Total Donations', value: '$2.5M+' },
    { icon: Users, label: 'Organizations', value: '50+' },
    { icon: Globe, label: 'Countries', value: '25+' },
  ];

  return (
    <div className="pt-16">
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <TreePine className="mx-auto h-12 w-12 text-green-600" />
            <h1 className="mt-4 text-4xl font-bold text-green-900">About Mazingira</h1>
            <p className="mt-2 text-lg text-gray-600">Connecting donors with environmental causes worldwide</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              Mazingira is dedicated to creating a sustainable future by connecting passionate donors with verified environmental organizations. We believe that every contribution, no matter how small, can make a significant impact on our planet's health.
            </p>
            <p className="text-lg text-gray-600">
              Through our platform, we ensure transparency and accountability in environmental funding, making it easier for donors to track their impact and for organizations to focus on their crucial work.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Environmental Conservation"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <stat.icon className="mx-auto h-8 w-8 text-green-600 mb-4" />
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">We ensure every donation is tracked and its impact is measurable.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accountability</h3>
              <p className="text-gray-600">We verify all organizations and monitor their project outcomes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600">We maximize the effect of every donation through strategic partnerships.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}