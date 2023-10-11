
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BookingForm() {

  const [values, setValues] = useState({email:"", roomNumber:"", startTime:"", endTime:""});

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/v1/booking", values)
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
          <h2>Book Room</h2>

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
              onChange={(e) => setValues({ ...values, email: e.target.value })}
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
              onChange={(e) =>
                setValues({ ...values, roomNumber: e.target.value })
              }
            />
          </div>

          <div className="mb-2">
            <label htmlFor="startTime"> Start Time </label>
            <input
              type="datetime"
              className="form-control"
              id="startTime"
              placeholder="YYYY-MM-DDTHH:MM:SS:MSSZ"
              required
              onChange={(e) =>
                setValues({ ...values, startTime: e.target.value })
              }
            />
          </div>

          <div className="mb-2">
            <label htmlFor="endTime"> End Time </label>
            <input
              type="datetime"
              className="form-control"
              placeholder="YYYY-MM-DDTHH:MM:SS:MSSZ"
              id="endTime"
              required
              onChange={(e) =>
                setValues({ ...values, endTime: e.target.value })
              }
            />
          </div>

          {!error ? (
            <button className="btn btn-success">Submit</button>
          ) : (
            <p className="bg-danger">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
