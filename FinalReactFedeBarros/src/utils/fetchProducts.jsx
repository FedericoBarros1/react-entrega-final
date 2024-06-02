import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=iphone');
    return response.data.results.map(product => ({
      id: product.id,
      name: product.title,
      price: product.price,
      imageUrl: product.thumbnail,
      stock: 10, // Puedes ajustar este valor según sea necesario
      description: product.title // Puedes ajustar este valor según sea necesario
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
