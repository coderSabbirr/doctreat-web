import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Booking from './components/Page/Booking/Booking/Booking';
import Home from './components/Page/Home/Home';
import Login from './components/Page/Login/Login/Login';
import PrivateRoute from './components/Page/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/Page/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import Register from './components/Page/Register/Register'
import ThankYou from './components/Page/ThankYou/ThankYou';
import AllArticels from './components/Page/allArticels/AllArticels';
import ContectUs from './components/Page/contectUs/ContectUs';
import Gallery from './components/Page/gallery/Gallery';

function App() {
  return (
    <AuthProvider>
      <div className="App">
     <Router>
     <Header></Header>
       <Switch>
         <Route exact path="/">
               <Home></Home>
         </Route>
         <Route  path="/home">
               <Home></Home>
         </Route>
         <Route  path="/articles">
               <AllArticels></AllArticels>
         </Route>
         <Route  path="/gallery">
              <Gallery></Gallery>
         </Route>
         <Route  path="/contect">
               <ContectUs></ContectUs>
         </Route>
         <Route path="/login">
              <Login></Login>
         </Route>
         <Route path="/register">
              <Register></Register>
         </Route>
         <PrivateRoute  path="/booking/:specialistId">
               <Booking></Booking>
         </PrivateRoute>
         <PrivateRoute path="/thankyou">
               <ThankYou></ThankYou>
         </PrivateRoute>
         <Route  path="*">
               <NotFound></NotFound>
         </Route>
        </Switch> 
        <Footer></Footer> 
        </Router>
   
    </div>
    </AuthProvider>
  );
}

export default App;
