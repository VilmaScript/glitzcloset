import { useState } from "react";

export default function ContactInfo({session}) {
    const user = {
        name: session.user.name,
        email: session.user.email,
        phone: "+1 234 567 890",
        address: "123 Glitz Street, New York, USA",
    };


    // State for editing mode
    const [isEditing, setIsEditing] = useState(false);
    const [phone, setPhone] = useState(user.phone);
    const [address, setAddress] = useState(user.address);

    const handleSave = () => {
        setIsEditing(false);
        // Optionally, save to Firebase here
    };

    return (
        <div className="px-5">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 my-5">

                {/* Contact Information Section */}
                <div className="col-span-5 bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold font-eb-garamond mb-4">Contact Information</h3>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>

                    {isEditing ? (
                        <>
                            <div className="mb-3">
                                <label className="block text-sm font-medium">Phone:</label>
                                <input 
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium">Address:</label>
                                <input 
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                />
                            </div>
                            <button 
                                className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-opacity-80"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            <p><strong>Phone:</strong> {phone}</p>
                            <p><strong>Address:</strong> {address}</p>
                            <button 
                                className="mt-4 px-4 py-2 bg-secondary text-white rounded hover:bg-opacity-80"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
