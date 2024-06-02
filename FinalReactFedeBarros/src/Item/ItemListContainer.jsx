import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form } from 'react-bootstrap'; 
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState(''); 
  const navigate = useNavigate();

  useEffect(() => {
    const getItems = async () => {
      const itemsCollection = collection(db, 'items');
      const itemsSnapshot = await getDocs(itemsCollection);
      const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProductos(itemsList);
    };
    getItems();
  }, []);

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  const productosFiltrados = productos.filter(producto =>
    producto.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container>
      <h2>Productos</h2>
      <Form className="mb-3">
        <Form.Control type="text" placeholder="Buscar productos..." value={busqueda} onChange={handleBusquedaChange} />
      </Form>
      <Row>
        {productosFiltrados.map(producto => (
          <Col key={producto.id} xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card style={{ height: '100%' }}>
              <Card.Img
                variant="top"
                src={producto.imageUrl}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>
                  Precio: ${producto.price}
                </Card.Text>
              </Card.Body>
              <Link to={`/item/${producto.id}`} className="btn btn-primary btn-sm">Ver Detalles</Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
