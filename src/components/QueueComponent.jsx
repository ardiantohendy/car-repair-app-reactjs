import Header from "./Header";

const data = [
  {
    id: 1,
    brand: "Toyota",
    model: "Avanza",
    plate: "F 1366 PT",
    date: "2025-03-14 & 07:10",
    services: ["Engine Upgrade", "Engine Repair", "Body Repair"],
    prices: ["2.500.000,00", "1.000.000,00", "1.000.000,00"],
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    plate: "B 2025 ZZ",
    date: "2025-03-15 & 09:00",
    services: ["Oil Change", "Brake Repair"],
    prices: ["500.000,00", "750.000,00"],
  },
  {
    id: 3,
    brand: "Suzuki",
    model: "Ertiga",
    plate: "D 7777 AB",
    date: "2025-03-16 & 10:30",
    services: ["Engine Upgrade", "Body Repair"],
    prices: ["2.000.000,00", "1.500.000,00"],
  },
  {
    id: 4,
    brand: "Mitsubishi",
    model: "Pajero",
    plate: "N 1234 KL",
    date: "2025-03-17 & 08:45",
    services: ["Transmission Repair"],
    prices: ["3.000.000,00"],
  },
  {
    id: 5,
    brand: "Mitsubishi",
    model: "Pajero",
    plate: "N 1234 KT",
    date: "2025-03-17 & 10:45",
    services: ["Transmission Repair", "Engine Upgrade"],
    prices: ["3.000.000,00", "2.000.000,00"],
  },
];

const QueueComponent = () => {
  return (
    <>
      <Header />
      <div className="queue">
        <div className="left">
          <h2>Book Online For Fast Service</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab dolorem fuga unde suscipit harum, dolore tempore voluptatibus, nobis corporis possimus ipsum corrupti, ad illo saepe sit minus eveniet quam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. In, recusandae!
          </p>
        </div>
        <div className="right">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Car Number</th>
                <th>Date & Time</th>
                <th className="service">Services</th>
                <th className="price">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{(index += 1)}</td>
                  <td>{item.brand}</td>
                  <td>{item.model}</td>
                  <td>{item.plate}</td>
                  <td>{item.date}</td>
                  <td>
                    <ul>
                      {item.services.map((service, i) => (
                        <li key={i}>
                          <p>{service}</p>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {item.prices.map((price, i) => (
                        <li key={i}>
                          <p>Rp. {price}</p>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <td>
                  <p>Rp. 4.500.000,00</p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default QueueComponent;
