import { useState } from "react";

function CustomFormImpl() { 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };
    
    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md">
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
            />
        </div>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
            />
        </div>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
            />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Submit
        </button>
        </form>
    );
}