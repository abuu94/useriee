import React from 'react'

const FoodCard = ({ image, name, description, price }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-600">{description}</p>
                <p className="text-blue-500 font-bold mt-2">${price}</p>
            </div>
        </div>
    )
}

export default FoodCard
