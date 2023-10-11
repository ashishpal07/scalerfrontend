
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBooking() {
  const { id } = useParams();

  const [bookingDetails, setBookingDetails] = useState([]);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/booking/${id}`)
      .then((res) => setBookingDetails(res.data.booking))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/api/v1/booking/${id}`, bookingDetails)
    .then((res) => {
        console.log(res.data);
        navigate("/bookings")
    })
    .catch((err) => {
        console.log(err);
        setError(err.message);
        setTimeout(()=>{
            setError("");
        },3000)
    });
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-100 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update Booking</h2>

          <div className="mb-2">
            <label htmlFor="email" className="mx-2 align-items-center">
              Email
            </label>
            <input
              type="text"
              placeholder="abc@gmail.com"
              className="form-control"
              id="email"
              required
              value={bookingDetails.email}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, email: e.target.value })
              }
            />
          </div>

          <div className="mb-2">
            <label htmlFor="roomNumber"> Room Number </label>
            <input
              type="text"
              placeholder="1A...2A or 1B...3B or 1C...5C"
              className="form-control"
              id="roomNumber"
              required
              value={bookingDetails.roomNumber}
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  roomNumber: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-2">
            <label htmlFor="startTime"> Start Time </label>
            <input
              type="datetime"
              className="form-control"
              id="startTime"
              value={bookingDetails.startTime}
              required
              placeholder="YYYY-MM-DDTHH:MM:SS:MSSZ"
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  startTime: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-2">
            <label htmlFor="endTime"> End Time </label>
            <input
              type="datetime"
              className="form-control"
              id="endTime"
              required
              placeholder="YYYY-MM-DDTHH:MM:SS:MSSZ"
              value={bookingDetails.endTime}
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  endTime: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-2">
            <label htmlFor="roomType"> Room Type </label>
            <input
              type="text"
              className="form-control"
              id="roomType"
              value={bookingDetails.roomType}
              required
              placeholder="ATYPE OR BTYPE OR CTYPE"
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  roomType: e.target.value,
                })
              }
            />
          </div>

          {/* <button className="btn btn-success" >Submit</button> */}
          {!error ? (
            <button className="btn btn-success">
              Submit
            </button>
          ) : (
            <p className="bg-danger">{error}</p>
          )}

        </form>
      </div>
    </div>
  );
}

export default UpdateBooking;