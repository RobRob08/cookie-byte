import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useCart } from '../context/cartContext';  // Import useCart hook

const Cart: React.FC = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart(); // Get cart and functions from context

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + (item.cookie.price * item.quantity), 0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Cart</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          {cart.length > 0 ? (
            cart.map((item) => (
              <IonItem key={item.cookie.id}>
                <IonLabel>
                  <h2>{item.cookie.name}</h2>
                  <p>{item.cookie.description}</p>
                  <p><strong>Price:</strong> ${item.cookie.price}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                </IonLabel>
                <IonButton onClick={() => decrementQuantity(item.cookie.id)}>-</IonButton>
                <IonButton onClick={() => incrementQuantity(item.cookie.id)}>+</IonButton>
                <IonButton onClick={() => removeFromCart(item.cookie.id)}>Remove</IonButton>
              </IonItem>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </IonList>

        {/* Total price */}
        {cart.length > 0 && (
          <div style={{ padding: '20px' }}>
            <h3>Total Price: ${totalPrice}</h3>
            <IonButton expand="block">Proceed to Checkout</IonButton>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Cart;
