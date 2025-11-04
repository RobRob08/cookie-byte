import '../design/CompHist.css';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle,
  IonButtons,IonMenuButton, IonCard, IonCardContent } from '@ionic/react';

const CompanyHistory: React.FC = () => {
  return (
    <IonPage className='compHist'>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
            <IonMenuButton />
            </IonButtons>
          <IonTitle>Company History</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <h2>ABOUT COOKIE BYTE</h2>
        <h6>Delivering joy, one byte at a time.</h6>
                <div className='abtAppCard'>
                  <IonCard>
                    <IonCardContent>
                      Cookies Byte was founded in 2025 by Robert Cayago
                      and Kishi Santos, who share a passion for sweet
                      treats and seamless digital experiences.
                      Recognizing the growing demand for convenient,
                      high-quality dessert delivery, they thought of
                      creating a platform that would bring joy to
                      cookie lovers everywhere in the country. 
                      The company is committed to making high-quality
                      cookies accessible with ease for everyone.
                      It is on a mission to provide a seamless platform
                      that lets users browse, order, and gift cookies
                      with just a few taps.
                    </IonCardContent>
                  </IonCard>
                </div>
      </IonContent>
    </IonPage>
  );
};

export default CompanyHistory;
