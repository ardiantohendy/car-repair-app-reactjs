import axios from "axios";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const BookComponent = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [services, setServices] = useState([]);
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleChangeService = (event) => {
    const { value, checked } = event.target;
    setServices((prev) => (checked ? [...prev, value] : prev.filter((service) => service !== value)));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Mencegah reload halaman

    const formData = {
      name,
      phone_number: phoneNumber,
      email,
      brand,
      model,
      car_number: carNumber,
      services,
      comment,
      date,
      time,
    };

    try {
      const access = localStorage.getItem("access"); // Ambil access dari localStorage jika ada
      const response = await axios.post("http://127.0.0.1:8000/add/", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access}`,
        },
      });

      console.log("Booking berhasil:", response.data);
      alert("Booking berhasil!");

      // Reset form setelah submit
      setName("");
      setPhoneNumber("");
      setEmail("");
      setBrand("");
      setModel("");
      setCarNumber("");
      setServices([]);
      setComment("");
      setDate("");
      setTime("");
    } catch (error) {
      console.error("Gagal membuat booking:", error.response ? error.response.data : error);
      alert("Terjadi kesalahan saat booking.");
    }
  };

  return (
    <>
      <Header />
      <div className="bookContainer">
        <div className="left">
          <h2>Book Online For Fast Service</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab dolorem fuga unde suscipit harum, dolore tempore voluptatibus, nobis corporis possimus ipsum corrupti, ad illo saepe sit minus eveniet quam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. In, recusandae!
          </p>
        </div>
        <div className="right">
          <h3>Input Data</h3>
          <form onSubmit={handleSubmit}>
            <div className="name">
              <label>Name:</label>
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="phoneandemail">
              <div>
                <label>Phone Number:</label>
                <input type="text" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
              </div>

              <div>
                <label>Email:</label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div className="brand">
              <label>Brand:</label>
              <select name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} required>
                <option value="">Select Your Car Brand</option>
                <option value="Toyota">Toyota</option>
                <option value="Daihatsu">Daihatsu</option>
                <option value="Honda">Honda</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Nissan">Nissan</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Lexus">Lexus</option>
                <option value="Peugeot">Peugeot</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes</option>
              </select>
            </div>
            <div className="modelandnumber">
              <div>
                <label>Model:</label>
                <input type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} required />
              </div>
              <div>
                <label>Car Number:</label>
                <input type="text" name="carNumber" value={carNumber} onChange={(e) => setCarNumber(e.target.value)} required />
              </div>
            </div>

            <div className="services">
              <label>Select Services:</label>
              {["Engine Upgrade", "Inspection Service", "Engine Repair", "Body Repair", "Electricity Repair", "Tire Repair"].map((service) => (
                <div key={service}>
                  <input type="checkbox" value={service} checked={services.includes(service)} onChange={handleChangeService} />
                  <label className="exp">{service}</label>
                </div>
              ))}
              <label>Selected Services:</label>
              <p>{services.join(", ") || "No service selected"}</p>
            </div>
            <div className="comment">
              <label>Comments:</label>
              <textarea name="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Describe issues..." />
            </div>
            <div className="dateandtime">
              <div>
                <label>Date:</label>
                <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>
              <div>
                <label>Time:</label>
                <input type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} required />
              </div>
            </div>

            <div className="button">
              <button type="submit">Book</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookComponent;
