import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle
     // Import IonToolbar
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { personOutline, listCircleOutline, personCircleOutline, cartOutline, clipboardOutline, homeOutline } from 'ionicons/icons'; // Example icons
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Our Products',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeOutline,
  },
  {
    title: 'Cart',
    url: '/cart',
    iosIcon: cartOutline,
    mdIcon: cartOutline,
  },
  {
    title: 'Company History',
    url: '/company-history',
    iosIcon: clipboardOutline,
    mdIcon: clipboardOutline,
  },
  {
    title: 'About the App',
    url: '/about-app',
    iosIcon: listCircleOutline,
    mdIcon: listCircleOutline,
  },
  {
    title: 'Developers',
    url: '/developers',
    iosIcon: personCircleOutline,
    mdIcon: personCircleOutline,
  },
  {
    title: 'Contact Us',
    url: '/contact-us',
    iosIcon: listCircleOutline,
    mdIcon: listCircleOutline,
  },
  {
    title: 'Login',
    url: '/login',
    iosIcon: personOutline,
    mdIcon: personOutline,
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Menu</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? 'selected' : ''}
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
