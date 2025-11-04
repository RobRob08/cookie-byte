import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonText } from '@ionic/react';
import { useAuth } from '../context/AuthContext';  // Import the custom Auth hook
import { FirebaseError } from 'firebase/app'; // Import FirebaseError for proper type handling

const Signup: React.FC = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSignup = async () => {
    try {
      await signup(email, password);
    } catch (error) {
      if (error instanceof FirebaseError) {
        // Handle Firebase-specific errors here
        switch (error.code) {
          case 'auth/weak-password':
            setError('The password is too weak. Please choose a stronger password.');
            break;
          case 'auth/email-already-in-use':
            setError('This email is already in use. Please use a different email.');
            break;
          case 'auth/invalid-email':
            setError('The email address is not valid.');
            break;
          default:
            setError('An error occurred during signup. Please try again.');
            break;
        }
      } else {
        // Handle any other types of errors
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div style={{ padding: '20px' }}>
          <IonInput 
            value={email}
            placeholder="Enter your email"
            onIonChange={(e) => setEmail(e.detail.value!)}
          />
          <IonInput 
            type="password"
            value={password}
            placeholder="Enter your password"
            onIonChange={(e) => setPassword(e.detail.value!)}
          />
          {error && <IonText color="danger">{error}</IonText>}

          <IonButton expand="block" onClick={handleSignup}>Signup</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
