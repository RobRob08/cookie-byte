// src/services/cookieService.ts
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';  // Import the Firestore instance
import { Cookie } from '../types/Cookie';  // Import the Cookie type

// Fetch cookies from Firestore
export const fetchCookies = async (): Promise<Cookie[]> => {
  const cookiesRef = collection(db, 'Cookies');  // Reference to 'Cookies' collection in Firestore
  console.log('Fetching cookies from Firestore...');  // Log to confirm that the function is triggered

  try {
    const snapshot = await getDocs(cookiesRef);  // Fetch documents from Firestore
    console.log('Firestore Snapshot:', snapshot);  // Log the snapshot to check what we received from Firestore

    if (snapshot.empty) {
      console.log('No cookies found!');  // Log if there are no documents in the collection
    }

    // Map the documents to the Cookie type
    const cookiesList: Cookie[] = snapshot.docs.map((doc) => ({
      id: doc.id,  // Firestore document ID
      description: doc.data().Description,
       name: doc.data().Name,           // Firestore field 'name'
      price: doc.data().Price,             // Firestore field 'price'
    }));

    console.log('Fetched cookies:', cookiesList);  // Log the mapped cookies

    return cookiesList;  // Return the list of cookies
  } catch (error) {
    console.error('Error fetching cookies:', error);  // Log any error that occurs
    throw error;  // Re-throw the error so that it can be handled in the calling component
  }
};
