import React, { useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';  // Ajusta esta ruta
import { collection, addDoc } from 'firebase/firestore';

const products = [
  {
    name: "Product 1",
    price: 10.99,
    description: "Description for Product 1",
    stock: 100,
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/tpfinalreact-6940a.appspot.com/o/images%2Fproduct1.jpg?alt=media&token=your-token"
  },
  {
    name: "Product 2",
    price: 15.99,
    description: "Description for Product 2",
    stock: 200,
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/tpfinalreact-6940a.appspot.com/o/images%2Fproduct2.jpg?alt=media&token=your-token"
  },
  // Add more products as needed
];

const AddProducts = () => {
  useEffect(() => {
    const addProducts = async () => {
      try {
        const itemsCollection = collection(db, 'items');
        for (let product of products) {
          await addDoc(itemsCollection, product);
        }
        console.log('Products added successfully');
      } catch (error) {
        console.error('Error adding products: ', error);
      }
    };

    addProducts();
  }, []);

  return (
    <div>
      <h2>Adding Products...</h2>
    </div>
  );
};

export default AddProducts;
