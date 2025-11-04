import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons,IonMenuButton } from '@ionic/react';

const ProductPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
            <IonMenuButton />
            </IonButtons>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>Product Page</div>
      </IonContent>
    </IonPage>
  );
};

export default ProductPage;
