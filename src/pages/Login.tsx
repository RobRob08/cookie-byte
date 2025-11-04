import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonText, IonRouterLink } from '@ionic/react';
import { useAuth } from '../context/AuthContext';  // Import the custom Auth hook
import { FirebaseError } from 'firebase/app'; // Import FirebaseError for proper type handling

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      if (error instanceof FirebaseError) {
        // Handle Firebase-specific errors here
        switch (error.code) {
          case 'auth/user-not-found':
            setError('No account found with this email.');
            break;
          case 'auth/wrong-password':
            setError('Incorrect password, please try again.');
            break;
          case 'auth/invalid-email':
            setError('The email address is not valid.');
            break;
          default:
            setError('An error occurred, please try again.');
            break;
        }
      } else {
        // Handle other types of errors (if any)
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
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

          <IonButton expand="block" onClick={handleLogin}>Login</IonButton>

          {/* Add a link to navigate to the Signup page */}
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <IonRouterLink href="/signup">
              Don't have an account? Sign up
            </IonRouterLink>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
