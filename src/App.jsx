import { BrowserRouter, Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Search from './components/Search/Search';

export const UserContext = createContext();
export const BookingContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [bookingId, setBookingId] = useState('');
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BookingContext.Provider value={{ bookingId, setBookingId }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/book/:placeId' Component={Booking} />
            <Route path='/search' element={<PrivateRoute><Search /></PrivateRoute>} />
            <Route path='/login' Component={Login} />
            <Route path='/signup' Component={SignUp} />
          </Routes>
        </BrowserRouter>
      </BookingContext.Provider>
    </UserContext.Provider>
  )
}

export default App
