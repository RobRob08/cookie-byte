import { useState, useEffect } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonGrid, IonRow, IonCol, IonModal, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import { fetchCookies } from '../services/cookieService';  // Import cookieService to fetch data
import { Cookie } from '../types/Cookie';  // Import the Cookie type
import { useCart } from '../context/cartContext'; // Import useCart hook

const CookieList: React.FC = () => {
  const [cookies, setCookies] = useState<Cookie[]>([]); // State for cookies
  const [showModal, setShowModal] = useState<boolean>(false); // Modal visibility state
  const [selectedCookie, setSelectedCookie] = useState<Cookie | null>(null); // State for selected cookie

  const { addToCart } = useCart(); // Get addToCart function from context

  // Fetch cookies when the component mounts
  useEffect(() => {
    const getCookies = async () => {
      try {
        console.log('Fetching cookies...');  // Log to verify if the function is called
        const cookiesList = await fetchCookies();
        console.log('Cookies List after fetch:', cookiesList);  // Log the cookies list after fetching

        setCookies(cookiesList);
      } catch (error) {
        console.error('Error in fetching cookies:', error);  // Log any error that occurs during the fetching process
      }
    };
    getCookies();
  }, []);  // Empty dependency array, meaning this runs only once when the component mounts

  // Open Modal with selected cookie details
  const openModal = (cookie: Cookie) => {
    setSelectedCookie(cookie); // Set the selected cookie for modal
    setShowModal(true); // Show the modal
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedCookie(null); // Reset selected cookie
  };

  return (
    <IonGrid>
      <IonRow>
        {cookies.length > 0 ? (
          cookies.map((cookie) => (
            <IonCol key={cookie.id} size="12" sizeMd="6" sizeLg="6">
              <IonCard onClick={() => openModal(cookie)}>
                <IonCardHeader>
                  <IonCardTitle>{cookie.name}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  <p>{cookie.description}</p>
                  <p><strong>Price:</strong> ${cookie.price}</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))
        ) : (
          <p>Loading cookies...</p>  // Show loading message if no cookies are available
        )}
      </IonRow>

      {/* Modal for displaying selected cookie details */}
      <IonModal isOpen={showModal} onDidDismiss={closeModal}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Cookie Details</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          {selectedCookie && (
            <div style={{ padding: '20px' }}>
              <h2>{selectedCookie.name}</h2>
              <p>{selectedCookie.description}</p>
              <p><strong>Price:</strong> ${selectedCookie.price}</p>
              <IonButton expand="block" onClick={() => addToCart(selectedCookie)}>
                Add to Cart
              </IonButton>
            </div>
          )}
          <IonButton expand="block" onClick={closeModal}>Close</IonButton>
        </IonContent>
      </IonModal>
    </IonGrid>
  );
};

export default CookieList;
