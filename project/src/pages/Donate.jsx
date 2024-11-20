import React, { useState } from 'react';
import { CreditCard, Calendar, DollarSign, Heart } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState('monthly');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [currency, setCurrency] = useState('Ksh');
  const [mpesaPhoneNumber, setMpesaPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      amount: donationAmount,
      currency,
      isRecurring,
      frequency: isRecurring ? frequency : null,
      isAnonymous,
      paymentMethod,
    });

    // For MPESA payment, handle it here if MPESA is selected
    if (paymentMethod === 'mpesa') {
      handleMpesaPayment();
    }
  };

  const currencySymbols = {
    Ksh: 'KSh',
    USD: '$',
    EUR: '€',
    GBP: '£',
  };

  const getCurrencySymbol = (currencyCode) => {
    return currencySymbols[currencyCode] || currencyCode;
  };

  const handleFrequencyClick = (newFrequency) => {
    setFrequency(newFrequency);
  };

  const handleMpesaPayment = async () => {
    try {
      const response = await fetch("http://localhost:3000/mpesa/stkpush", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: mpesaPhoneNumber, // The number input by the user
          amount: donationAmount, // Donation amount
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Payment prompt sent to your MPESA. Please complete the payment.");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert("Failed to initiate payment. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <DollarSign className="mx-auto h-16 w-16 text-white" />
          <h1 className="mt-4 text-4xl font-bold">Make a Donation</h1>
          <p className="mt-2 text-lg">Support environmental conservation efforts worldwide</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            {/* Donation Amount */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Donation Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-400">
                  {getCurrencySymbol(currency)}
                </span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Enter amount"
                  required
                />
              </div>
            </div>

            {/* Currency Selector */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-500"
              >
                <option value="Ksh">Kenyan Shilling (Ksh)</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">British Pound (GBP)</option>
              </select>
            </div>

            {/* Recurring Donation */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="recurring"
                  checked={isRecurring}
                  onChange={(e) => setIsRecurring(e.target.checked)}
                  className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="recurring" className="ml-2 text-sm text-gray-900">
                  Make this a recurring donation
                </label>
              </div>

              {isRecurring && (
                <div className="ml-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Frequency</label>
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${frequency === 'monthly' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                      onClick={() => setFrequency('monthly')}
                    >
                      Monthly
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${frequency === 'quarterly' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                      onClick={() => setFrequency('quarterly')}
                    >
                      Quarterly
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${frequency === 'yearly' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                      onClick={() => setFrequency('yearly')}
                    >
                      Yearly
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Anonymous Donation */}
            <div className="mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="anonymous" className="ml-2 text-sm text-gray-900">
                  Make this an anonymous donation
                </label>
              </div>
            </div>

            {/* Payment Information */}
            <div className="mb-6">
              <label htmlFor="paymentMethod" className="block text-sm font-semibold text-gray-700">Payment Method</label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select Payment Method</option>
                <option value="creditCard">Credit Card</option>
                <option value="debitCard">Debit Card</option>
                <option value="mpesa">MPESA</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            {/* Payment Form Based on Selected Method */}
            {paymentMethod === 'mpesa' && (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">MPESA Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your MPESA phone number"
                  value={mpesaPhoneNumber}
                  onChange={(e) => setMpesaPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-500"
                  required
                />
              </div>
            )}

            {/* Donation Summary */}
            <div className="mt-8 border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Frequency</span>
                <span className="capitalize">{frequency}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>
                  {getCurrencySymbol(currency)} {donationAmount} / {frequency === 'monthly' ? 'month' : frequency}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2 mt-6"
            >
              <Heart size={20} />
              Complete Donation
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-white py-6 mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
          <p className="text-lg">&copy; 2024 Mazingira. All rights reserved.</p>
          <p className="mt-2 text-sm">Your support helps protect the planet for future generations.</p>

          <div className="flex justify-center mt-4 space-x-6">
            {/* Social Media Icons */}
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
