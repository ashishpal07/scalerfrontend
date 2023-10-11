import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AllBookings from './Components/Bookings';
import BookingForm from './Components/BookingForm';
import Navbar from './Components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import UpdateBooking from './Components/updateBooking';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bookings' element={<AllBookings />} />
          <Route path='/create' element={<BookingForm/>} />
          <Route path='/update/:id' element={<UpdateBooking/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
