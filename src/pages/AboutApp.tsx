import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle,
  IonButtons,IonMenuButton, IonLabel, IonItem, IonAvatar,
  IonCard, IonCardHeader, IonCardSubtitle,
  IonCardContent} from '@ionic/react';

const AboutApp: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
            <IonMenuButton />
            </IonButtons>
          <IonTitle>About the App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h2>ABOUT COOKIE BYTE APP</h2>
        <div className='abtAppCard'>
          <IonCard>
            <IonCardContent>
              Cookies Byte is a delightful cookie store app
              designed to satisfy your sweet cravings with just
              a few taps. Whether you're hunting for classic
              chocolate chip, double chocolate chip, or
              adventurous flavor combos, and gifting cookies
              a breeze. Cookies Bytes makes browsing and
              ordering cookies for everyone.
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AboutApp;
