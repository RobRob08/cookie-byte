import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons,IonMenuButton } from '@ionic/react';

const OrderHistory: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
            <IonMenuButton />
            </IonButtons>
          <IonTitle>Order History</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>Order History Page Content</div>
      </IonContent>
    </IonPage>
  );
};

export default OrderHistory;
