import { useState } from "react";

const BookComponent = () => {
  //     const [formData, setFormData] = useState({
  //     nama: "",
  //     telepon: "",
  //     email: "",
  //     merek: "",
  //     model: "",
  //     tahun: "",
  //     plat: "",
  //     servis: [],
  //     keterangan: "",
  //     tanggal: "",
  //     waktu: "",
  //     lokasi: "",
  //     setuju: false,
  //   });

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

  //   const handleChange = (e) => {
  //     const { name, value, type, checked } = e.target;
  //     if (type === "checkbox") {
  //       if (name === "setuju") {
  //         setFormData((prev) => ({ ...prev, [name]: checked }));
  //       } else {
  //         setFormData((prev) => ({
  //           ...prev,
  //           servis: checked ? [...prev.servis, value] : prev.servis.filter((s) => s !== value),
  //         }));
  //       }
  //     } else {
  //       setFormData((prev) => ({ ...prev, [name]: value }));
  //     }
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form Submitted: ", formData);
  //     alert("Booking berhasil dikirim!");
  //   };

  return (
    <>
      <div className="bookContainer">
        <div className="left">
          <h2>Book Online For Fast Service</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab dolorem fuga unde suscipit harum, dolore tempore voluptatibus, nobis corporis possimus ipsum corrupti, ad illo saepe sit minus eveniet quam.</p>
        </div>
        <div className="right">
          <h3>Please Fill all These Forms</h3>

          <form>
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={handleChangeName} />

            <label>Phone Number:</label>
            <input type="text" name="phoneNumber" value={phoneNumber} onChange={handleChangePhone} />

            <label>Email:</label>
            <input type="text" name="email" value={email} onChange={handleChangeEmail} />

            <label htmlFor="">Brand:</label>
            <select name="brand" value={brand} onChange={handleChangeBrand}>
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
            <input type="text" name="model" value={model} onChange={handleChangeModel} />

            <label>Car Number:</label>
            <input type="text" name="carNumber" value={carNumber} onChange={handleChangeCarNumber} />

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
          </form>
        </div>
      </div>
    </>

    // <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    //   <h2 className="text-xl font-bold mb-4">Form Booking Servis Mobil</h2>
    //   <form onSubmit={handleSubmit}>
    //     <label className="block">Nama Pemilik:</label>
    //     <input type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full border p-2 rounded mb-2" required />

    //     <label className="block">Nomor Telepon:</label>
    //     <input type="tel" name="telepon" value={formData.telepon} onChange={handleChange} className="w-full border p-2 rounded mb-2" required />

    //     <label className="block">Email (Opsional):</label>
    //     <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded mb-2" />

    //     <label className="block">Merek Mobil:</label>
    //     <input type="text" name="merek" value={formData.merek} onChange={handleChange} className="w-full border p-2 rounded mb-2" required />

    //     <label className="block">Model Mobil:</label>
    //     <input type="text" name="model" value={formData.model} onChange={handleChange} className="w-full border p-2 rounded mb-2" required />

    //     <label className="block">Tahun Produksi:</label>
    //     <select name="tahun" value={formData.tahun} onChange={handleChange} className="w-full border p-2 rounded mb-2" required>
    //       <option value="">Pilih Tahun</option>
    //       {[...Array(26)].map((_, i) => {
    //         const year = 2025 - i;
    //         return (
    //           <option key={year} value={year}>
    //             {year}
    //           </option>
    //         );
    //       })}
    //     </select>

    //     <label className="block">Nomor Polisi (Plat Nomor):</label>
    //     <input type="text" name="plat" value={formData.plat} onChange={handleChange} className="w-full border p-2 rounded mb-2" required />

    //     <label className="block">Keterangan Tambahan:</label>
    //     <textarea name="keterangan" value={formData.keterangan} onChange={handleChange} className="w-full border p-2 rounded mb-2"></textarea>

    //     <label className="block">Tanggal Booking:</label>
    //     <input type="date" name="tanggal" value={formData.tanggal} onChange={handleChange} className="w-full border p-2 rounded mb-2" required />

    //     <label className="block">Waktu Booking (Opsional):</label>
    //     <input type="time" name="waktu" value={formData.waktu} onChange={handleChange} className="w-full border p-2 rounded mb-2" />

    //     <label className="block">Pilih Lokasi Bengkel:</label>
    //     <select name="lokasi" value={formData.lokasi} onChange={handleChange} className="w-full border p-2 rounded mb-2" required>
    //       <option value="">Pilih Lokasi</option>
    //       {["Bengkel A", "Bengkel B", "Bengkel C"].map((lokasi) => (
    //         <option key={lokasi} value={lokasi}>
    //           {lokasi}
    //         </option>
    //       ))}
    //     </select>

    //     <div className="mt-2">
    //       <input type="checkbox" name="setuju" checked={formData.setuju} onChange={handleChange} required /> Saya setuju dengan syarat & ketentuan
    //     </div>

    //     <button type="submit" className="bg-green-500 text-white p-2 rounded mt-4 w-full">
    //       Kirim Booking
    //     </button>
    //   </form>
    // </div>
  );
};

export default BookComponent;
