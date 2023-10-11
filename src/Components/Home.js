
import '../Style/home.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Home() {
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://hotelmanagement-server.onrender.com/api/v1/rooms`)
      .then((res) => setRoomsData(res.data.rooms))
      .catch((err) => console.log(err));
  }, []);

  return (
    // justify-content-center align-items-center
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 rounded bg-white p-1 my-3 scroll-div">
        <h2>Rooms List</h2>

        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Room Type</th>
            </tr>
          </thead>

          <tbody>
            {roomsData.map((room, index) => {
              return (
                <tr key={index}>
                  <td>{room.roomNumber}</td>
                  <td>{room.roomType}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;