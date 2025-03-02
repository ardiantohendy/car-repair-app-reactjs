import { useState } from "react";

const BookComponent = () => {
  const [formData, setFormData] = useState({
    nama: "",
    telepon: "",
    email: "",
    merek: "",
    model: "",
    tahun: "",
    plat: "",
    servis: [],
    keterangan: "",
    tanggal: "",
    waktu: "",
    lokasi: "",
    setuju: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "setuju") {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      } else {
        setFormData((prev) => ({
          ...prev,
          servis: checked ? [...prev.servis, value] : prev.servis.filter((s) => s !== value),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    alert("Booking berhasil dikirim!");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Form Booking Servis Mobil</h2>
      <form onSubmit={handleSubmit}>
        <label className="block">Nama Pemilik:</label>
        <input type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full border p-2 rounded mb-2" required />

        <label className="block">Nomor Telepon:</label>
        <input type="tel" name="telepon" value={formData.telepon} onChange={handleChange} className="w-full border p-2 rounded mb-2" required />

        <label className="block">Email (Opsional):</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded mb-2" />

        <label className="block">Merek Mobil:</label>
        <input type="text" name="merek" value={formData.merek} onChange={handleChange} className="w-full border p-2 rounded mb-2" required />

        <label className="block">Model Mobil:</label>
        <input type="text" name="model" value={formData.model} onChange={handleChange} className="w-full border p-2 rounded mb-2" required />

        <label className="block">Tahun Produksi:</label>
        <select name="tahun" value={formData.tahun} onChange={handleChange} className="w-full border p-2 rounded mb-2" required>
          <option value="">Pilih Tahun</option>
          {[...Array(26)].map((_, i) => {
            const year = 2025 - i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>

        <label className="block">Nomor Polisi (Plat Nomor):</label>
        <input type="text" name="plat" value={formData.plat} onChange={handleChange} className="w-full border p-2 rounded mb-2" required />

        <label className="block">Jenis Servis:</label>
        {["Ganti Oli", "Servis Berkala", "Perbaikan Rem", "Tune Up"].map((servis) => (
          <div key={servis}>
            <input type="checkbox" name="servis" value={servis} checked={formData.servis.includes(servis)} onChange={handleChange} /> {servis}
          </div>
        ))}

        <label className="block">Keterangan Tambahan:</label>
        <textarea name="keterangan" value={formData.keterangan} onChange={handleChange} className="w-full border p-2 rounded mb-2"></textarea>

        <label className="block">Tanggal Booking:</label>
        <input type="date" name="tanggal" value={formData.tanggal} onChange={handleChange} className="w-full border p-2 rounded mb-2" required />

        <label className="block">Waktu Booking (Opsional):</label>
        <input type="time" name="waktu" value={formData.waktu} onChange={handleChange} className="w-full border p-2 rounded mb-2" />

        <label className="block">Pilih Lokasi Bengkel:</label>
        <select name="lokasi" value={formData.lokasi} onChange={handleChange} className="w-full border p-2 rounded mb-2" required>
          <option value="">Pilih Lokasi</option>
          {["Bengkel A", "Bengkel B", "Bengkel C"].map((lokasi) => (
            <option key={lokasi} value={lokasi}>
              {lokasi}
            </option>
          ))}
        </select>

        <div className="mt-2">
          <input type="checkbox" name="setuju" checked={formData.setuju} onChange={handleChange} required /> Saya setuju dengan syarat & ketentuan
        </div>

        <button type="submit" className="bg-green-500 text-white p-2 rounded mt-4 w-full">
          Kirim Booking
        </button>
      </form>
    </div>
  );
};

export default BookComponent;
