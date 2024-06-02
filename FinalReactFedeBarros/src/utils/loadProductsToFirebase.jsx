import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';

export const loadProductsToFirebase = async (products) => {
  const itemsCollection = collection(db, 'items');

  // Eliminar todos los documentos en la colección 'items'
  const itemsSnapshot = await getDocs(itemsCollection);
  itemsSnapshot.forEach(async (document) => {
    await deleteDoc(doc(db, 'items', document.id));
  });

  // Agregar los nuevos productos a la colección 'items'
  for (const product of products) {
    try {
      await setDoc(doc(itemsCollection, product.id), product);
      console.log(`Product ${product.name} added to Firebase`);
    } catch (error) {
      console.error('Error adding product to Firebase:', error);
    }
  }
};
