
import '../Style/bookings.css'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function AllBookings() {
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/booking")
      .then((res) => setBookingsData(res.data.allbookings))
      .catch((err) => console.log(err));
  }, []);

  const deletehandler= async (id) =>{
    await axios.delete(`http://localhost:4000/api/v1/booking/${id}`);
    const filteredArray = bookingsData.filter(item => item._id !== id);
    setBookingsData(filteredArray);
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-90 rounded bg-white p-3 table-responsive mt-2">
        <h2>All Bookings</h2>
        
        <table className="table table table-hover table-dark able-striped">
          <thead>
            <tr>
              <th>Room Type</th>
              <th>Room Number</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              bookingsData.map((booking, index) => {
                return (
                  <tr key={index}>
                    <td>{booking.roomType}</td>
                    <td>{booking.roomNumber}</td>
                    <td>{booking.startTime}</td>
                    <td>{booking.endTime}</td>
                    <td>{booking.price}</td>
                    <td>
                      <Link to={`/update/${booking._id}`} className="btn btn-sm btn-primary mx-3">
                        Edit
                      </Link>
                      <Link onClick={()=>{deletehandler(booking._id)}} className="btn btn-sm btn-danger mx-3" >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllBookings;