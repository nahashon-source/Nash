import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ManageBeneficiariesPage = () => {
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [description, setDescription] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [dateSent, setDateSent] = useState('');
  const [status, setStatus] = useState('');
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState(null);

  // Axios instance for API calls
  const api = axios.create({
    baseURL: 'https://project-backend-1-z8k0.onrender.com',  // Backend URL
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Fetch beneficiaries and inventory data
  const fetchBeneficiaries = async () => {
    try {
      const response = await api.get('/api/beneficiaries');
      console.log('Fetched beneficiaries:', response.data);

      if (Array.isArray(response.data)) {
        setBeneficiaries(response.data);
        setError(null); // Clear any previous errors
      } else {
        console.error('Expected array but got:', response.data);
        setError('Failed to fetch beneficiaries');
      }
    } catch (error) {
      console.error('Error fetching beneficiaries:', error.response ? error.response.data : error.message);
      setError('Failed to fetch beneficiaries');
    }
  };

  const fetchInventory = async () => {
    try {
      const response = await api.get('/api/inventory');
      console.log('Fetched inventory:', response.data);

      if (Array.isArray(response.data)) {
        setInventory(response.data);
        setError(null); // Clear any previous errors
      } else {
        console.error('Expected array but got:', response.data);
        setError('Failed to fetch inventory');
      }
    } catch (error) {
      console.error('Error fetching inventory:', error.response ? error.response.data : error.message);
      setError('Failed to fetch inventory');
    }
  };

  useEffect(() => {
    fetchBeneficiaries();
    fetchInventory();
  }, []);

  const handleBeneficiarySubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/beneficiaries', {
        name: beneficiaryName,
        description,
      });
      setStatus('Beneficiary added successfully!');
      setBeneficiaryName('');
      setDescription('');
      fetchBeneficiaries(); // Refresh beneficiaries list
    } catch (error) {
      console.error('Error adding beneficiary:', error.response ? error.response.data : error.message);
      setStatus('Error adding beneficiary');
    }
  };

  const handleInventorySubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/inventory', {
        item_name: itemName,
        quantity,
        date_sent: dateSent,
      });
      setStatus('Inventory item added successfully!');
      setItemName('');
      setQuantity('');
      setDateSent('');
      fetchInventory(); // Refresh inventory list
    } catch (error) {
      console.error('Error adding inventory item:', error.response ? error.response.data : error.message);
      setStatus('Error adding inventory item');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-white-200 via-white-300 to-white-500 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Manage Beneficiaries and Inventory</h2>

        {error && <p className="text-center text-red-600 font-semibold">{error}</p>} {/* Display errors */}

        <h3 className="text-2xl font-semibold text-green-600 mb-4">Add Beneficiary</h3>
        <form onSubmit={handleBeneficiarySubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={beneficiaryName}
              onChange={(e) => setBeneficiaryName(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold text-lg rounded-md hover:bg-green-700 transition duration-200"
          >
            Add Beneficiary
          </button>
        </form>

        <h3 className="text-2xl font-semibold text-green-600 mt-8 mb-4">Add Inventory Item</h3>
        <form onSubmit={handleInventorySubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Item Name</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Date Sent</label>
            <input
              type="date"
              value={dateSent}
              onChange={(e) => setDateSent(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold text-lg rounded-md hover:bg-green-700 transition duration-200"
          >
            Add Inventory Item
          </button>
        </form>
      </div>

      <footer className="bg-white py-8 mt-12 border-t border-gray-200 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
          <p className="text-lg">&copy; 2024 EcoGuard. All rights reserved.</p>
          <p className="mt-2 text-sm">Your support helps protect the planet!</p>
          <div className="flex justify-center mt-4">
            <a href="#" className="mx-4 text-green-600">
              <FaWhatsapp size={30} />
            </a>
            <a href="#" className="mx-4 text-blue-600">
              <FaFacebook size={30} />
            </a>
            <a href="#" className="mx-4 text-pink-600">
              <FaInstagram size={30} />
            </a>
            <a href="#" className="mx-4 text-blue-400">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ManageBeneficiariesPage;
