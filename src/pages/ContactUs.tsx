import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons,IonMenuButton } from '@ionic/react';

const ContactUs: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
            <IonMenuButton />
            </IonButtons>
          <IonTitle>ContactUs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>ContactUsaaaaaaaaaaaaaaaaaaa</div>
      </IonContent>
    </IonPage>
  );
};

export default ContactUs;
