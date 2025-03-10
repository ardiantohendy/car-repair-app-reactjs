const QueueComponent = () => {
  return (
    <>
      <div className="queue">
        <div className="container">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Car Number</th>
                  <th>Date & Time</th>
                  <th className="service">Services</th>
                  <th className="price">Bill</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Toyota</td>
                  <td>Avanza</td>
                  <td>F 1366 PT</td>
                  <td>2025-03-14 & 07:10</td>
                  <td>
                    <ul>
                      <li>
                        <p>Engine Upgrade</p>
                      </li>
                      <li>
                        <p>Engine Repair</p>
                      </li>
                      <li>
                        <p>Body Repair</p>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <p>Rp. 2.500.000,00</p>
                      </li>
                      <li>
                        <p>Rp. 1.000.000,00</p>
                      </li>
                      <li>
                        <p>Rp. 1.000.000,00</p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Toyota</td>
                  <td>Avanza</td>
                  <td>F 1366 PT</td>
                  <td>2025-03-14 & 07:10</td>
                  <td>
                    <ul>
                      <li>
                        <p>Engine Upgrade</p>
                      </li>
                      <li>
                        <p>Engine Repair</p>
                      </li>
                      <li>
                        <p>Body Repair</p>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <p>Rp. 2.500.000,00</p>
                      </li>
                      <li>
                        <p>Rp. 1.000.000,00</p>
                      </li>
                      <li>
                        <p>Rp. 1.000.000,00</p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Toyota</td>
                  <td>Avanza</td>
                  <td>F 1366 PT</td>
                  <td>2025-03-14 & 07:10</td>
                  <td>
                    <ul>
                      <li>
                        <p>Engine Upgrade</p>
                      </li>
                      <li>
                        <p>Engine Repair</p>
                      </li>
                      <li>
                        <p>Body Repair</p>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <p>Rp. 2.500.000,00</p>
                      </li>
                      <li>
                        <p>Rp. 1.000.000,00</p>
                      </li>
                      <li>
                        <p>Rp. 1.000.000,00</p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Toyota</td>
                  <td>Avanza</td>
                  <td>F 1366 PT</td>
                  <td>2025-03-14 & 07:10</td>
                  <td>
                    <ul>
                      <li>
                        <p>Engine Upgrade</p>
                      </li>
                      <li>
                        <p>Engine Repair</p>
                      </li>
                      <li>
                        <p>Body Repair</p>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <p>Rp. 2.500.000,00</p>
                      </li>
                      <li>
                        <p>Rp. 1.000.000,00</p>
                      </li>
                      <li>
                        <p>Rp. 1.000.000,00</p>
                      </li>
                    </ul>
                  </td>
                </tr>
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
      </div>
    </>
  );
};

export default QueueComponent;
