import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

// Import your pages and components
import Menu from './components/Menu';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import HomePage from './pages/Home';
import ProductPage from './pages/Products';

// Import Cart Context
import { CartProvider } from './context/cartContext'; // Import CartProvider to share cart state globally

/* Core and Ionic CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      {/* Wrap the entire app in the CartProvider to provide cart data globally */}
      <AuthProvider>
      <CartProvider>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            {/* The Menu Component */}
            <Menu />

            {/* Main Content */}
            <IonRouterOutlet id="main">
              {/* Define Routes */}
              <Route path="/" exact>
                <Redirect to="/home" /> {/* Redirect to Home page */}
              </Route>
              <Route path="/home" component={HomePage} />
              <Route path="/profile" component={Profile} />
              <Route path="/cart" component={Cart} />
              <Route path="/order-history" component={OrderHistory} />
              <Route path="/products" component={ProductPage} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </CartProvider>
    </AuthProvider>  
    </IonApp>
  );
};

export default App;
