import React, { useState } from 'react';
import { CreditCard, Calendar, DollarSign } from 'lucide-react';

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState('monthly');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your backend API
    console.log({
      amount: donationAmount,
      isRecurring,
      frequency: isRecurring ? frequency : null,
      isAnonymous
    });
  };

  return (
    <div className="pt-16">
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <DollarSign className="mx-auto h-12 w-12 text-green-600" />
            <h1 className="mt-4 text-4xl font-bold text-green-900">Make a Donation</h1>
            <p className="mt-2 text-lg text-gray-600">Support environmental conservation efforts worldwide</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Donation Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2">
                  <DollarSign className="h-6 w-6 text-gray-400" />
                </span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Enter amount"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="recurring"
                  checked={isRecurring}
                  onChange={(e) => setIsRecurring(e.target.checked)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="recurring" className="ml-2 block text-sm text-gray-900">
                  Make this a recurring donation
                </label>
              </div>

              {isRecurring && (
                <div className="ml-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Frequency
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              )}
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-900">
                  Make this an anonymous donation
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
              <div className="grid gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2">
                      <CreditCard className="h-6 w-6 text-gray-400" />
                    </span>
                    <input
                      type="text"
                      className="w-full pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                      placeholder="Card number"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Expiration Date
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2">
                        <Calendar className="h-6 w-6 text-gray-400" />
                      </span>
                      <input
                        type="text"
                        className="w-full pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                      placeholder="CVC"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
            >
              <Heart size={20} />
              Complete Donation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}