import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons,IonMenuButton } from '@ionic/react';
const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
            <IonMenuButton />
            </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>Profile Page</div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
