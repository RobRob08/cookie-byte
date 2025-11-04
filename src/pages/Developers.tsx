import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle,
  IonButtons,IonMenuButton, IonLabel, IonItem, IonAvatar,
  IonCard, IonCardHeader, IonCardSubtitle} from '@ionic/react';

const Developers: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
            <IonMenuButton />
            </IonButtons>
          <IonTitle>Developers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>DEVELOPERS</h1>
        <div className='devCard'>
          <IonCard>
            <IonCardHeader>
              <IonItem lines="none">
                <IonAvatar aria-hidden="true" slot="start">
                  <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>   
                <IonLabel>Robert Christian R. Cayago
                <IonCardSubtitle>Email: qrcrcayago@tip.edu.ph</IonCardSubtitle></IonLabel>
              </IonItem>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonItem lines="none">
                <IonAvatar aria-hidden="true" slot="start">
                  <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>   
                <IonLabel>Kishi Blue N. Santos
                <IonCardSubtitle>Email: qkbnsantos@tip.edu.ph</IonCardSubtitle></IonLabel>
              </IonItem>
            </IonCardHeader>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Developers;
