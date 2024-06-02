import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = async () => {
      const itemDoc = doc(db, 'items', itemId);
      const itemSnapshot = await getDoc(itemDoc);
      if (itemSnapshot.exists()) {
        setItem({ id: itemSnapshot.id, ...itemSnapshot.data() });
      }
    };
    getItem();
  }, [itemId]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
    </div>
  );
}

export default ItemDetailContainer;

