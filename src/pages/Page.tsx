// src/pages/Page.tsx
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CookieList from '../components/CookieList';  // Import CookieList component

const Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          <IonTitle>Cookies</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <CookieList />  {/* Displaying the list of cookies */}
      </IonContent>
    </IonPage>
  );
};

export default Page;
