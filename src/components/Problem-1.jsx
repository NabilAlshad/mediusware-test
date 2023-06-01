import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [data, setData] = useState({
    name: "",
    status: "",
  });
  const [allData, setAllData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllData([...allData, data]);
    setData({
      name: "",
      status: "",
    });
  };

  console.log(allData);

  const handleClick = (val) => {
    console.log(val);

    setShow(val);
  };
  const sortedData = allData.sort((a, b) => {
    if (a.status === "active" && b.status !== "active") {
      return -1;
    } else if (a.status !== "active" && b.status === "active") {
      return 1;
    } else if (a.status === "completed" && b.status !== "completed") {
      return -1;
    } else if (a.status !== "completed" && b.status === "completed") {
      return 1;
    } else {
      return 0;
    }
  });

  const filteredData = sortedData.filter((item) => {
    if (show === "completed") {
      return item.status === "completed";
    } else if (show === "active") {
      return item.status === "active";
    } else {
      return true;
    }
  });
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setData({
                    ...data,
                    name: e.target.value,
                  })
                }
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setData({
                    ...data,
                    status: e.target.value,
                  })
                }
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <th>Name</th>
              <th>Status </th>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
