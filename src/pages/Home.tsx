// src/pages/HomePage.tsx
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons } from '@ionic/react';
import CookieList from '../components/CookieList';  // Import the CookieList component

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          <IonTitle>Cookie Byte</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <CookieList />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
