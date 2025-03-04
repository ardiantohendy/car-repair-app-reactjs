import { useState } from "react";

const BookComponent = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [services, setServices] = useState([]);
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeBrand = (e) => {
    setBrand(e.target.value);
  };

  const handleChangeModel = (e) => {
    setModel(e.target.value);
  };

  const handleChangeCarNumber = (e) => {
    setCarNumber(e.target.value);
  };

  const servicesList = ["Engine Upgrade", "Inspection Service", "Engine Repair", "Body Repair", "Electricity Repair", "Tire Repair"];

  const handleChangeService = (event) => {
    const { value, checked } = event.target;

    setServices((prev) => (checked ? [...prev, value] : prev.filter((service) => service !== value)));
  };

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah reload halaman

    // Menampilkan data di console (bisa diganti dengan API call)
    console.log("Form Data:", {
      name,
      phoneNumber,
      email,
      brand,
      model,
      carNumber,
      services,
      comment,
      date,
      time,
    });

    alert("Booking submitted successfully!");
  };

  return (
    <>
      <div className="bookContainer">
        <div className="left">
          <h2>Book Online For Fast Service</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab dolorem fuga unde suscipit harum, dolore tempore voluptatibus, nobis corporis possimus ipsum corrupti, ad illo saepe sit minus eveniet quam.</p>
        </div>
        <div className="right">
          <h3>Please Fill all These Forms</h3>

          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={handleChangeName} required />

            <label>Phone Number:</label>
            <input type="text" name="phoneNumber" value={phoneNumber} onChange={handleChangePhone} required />

            <label>Email:</label>
            <input type="text" name="email" value={email} onChange={handleChangeEmail} required />

            <label>Brand:</label>
            <select name="brand" value={brand} onChange={handleChangeBrand} required>
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
            <p>Car Brand: {brand}</p>

            <label>Model:</label>
            <input type="text" name="model" value={model} onChange={handleChangeModel} required />

            <label>Car Number:</label>
            <input type="text" name="carNumber" value={carNumber} onChange={handleChangeCarNumber} required />

            <div>
              <label>Select Services</label>
              {servicesList.map((service) => (
                <div key={service}>
                  <input type="checkbox" value={service} checked={services.includes(service)} onChange={handleChangeService} />
                  <label>{service}</label>
                </div>
              ))}

              <p>Selected Services:</p>
              <p>{services.join(", ") || "No service selected"}</p>
            </div>

            <label>Comments:</label>
            <textarea name="comment" value={comment} onChange={handleChangeComment} placeholder="add details of the car's problems" />

            <label>Date:</label>
            <input type="date" name="date" value={date} onChange={handleChangeDate} required />

            <label>Time:</label>
            <input type="time" name="time" value={time} onChange={handleChangeTime} required />

            <button type="submit">Book</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookComponent;
