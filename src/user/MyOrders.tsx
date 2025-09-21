import { useEffect, useState } from 'react';
import { getUserOrders } from '../firebase/orders';
import type { Order } from '../types';
import { useAuth } from '../firebase/useAuth';
import PageLayout from '../pages/PageLayout';

const MyOrders = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (currentUser?.uid) {
        const userOrders = await getUserOrders(currentUser.uid);
        setOrders(userOrders);
      }
      setLoading(false);
    };
    fetchOrders();
  }, [currentUser]);

  console.log('currentUser:', currentUser);
  console.log('orders:', orders);

  if (loading) return <p>Loading your orders...</p>;

  if (!orders.length) {
    return (
      <PageLayout>
        <h1>My Orders</h1>
        <p>You have not placed any orders yet.</p>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <h1>My Orders</h1>
      {orders.map(order => (
        <div key={order.id} className='order-details mb-6 p-4 border rounded'>
          <h2>Order #{order.id}</h2>
          <p><strong>Date:</strong> {order.createdAt?.toLocaleString?.() ?? String(order.createdAt)}</p>
          <p><strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}</p>
          <h3>Products</h3>
          <ul>
            {order.products.map((item, idx) => (
              <li key={idx}>
                <p><strong>{item.title ?? 'Product'}</strong></p>
                <p>Quantity: {item.quantity}</p>
                <p>Price per Item: ${item.price.toFixed(2)}</p>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </PageLayout>
  );
};

export default MyOrders;