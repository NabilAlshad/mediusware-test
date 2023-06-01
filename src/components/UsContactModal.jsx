import React from "react";

const UsContactModal = ({ activeModal, closeModal, usContacts, openModal }) => {
  return (
    <>
      {activeModal === "us" && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">US Contacts Modal</h5>
              <button type="button" className="close" onClick={closeModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="">
                <input type="text" className=""></input>
                <div className="btn btn-success mx-3">submit</div>
              </form>
              <table className="table table-striped ">
                <thead>
                  <th>id</th>
                  <th>Phone</th>
                  <th>Country Name</th>
                </thead>
                <tbody>
                  {usContacts.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.phone}</td>
                      <td>{item.country.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                style={{
                  background: "#46139f",
                  textDecoration: "none",
                  color: "white",
                }}
                className="btn btn-link"
                onClick={() => openModal("all")}
              >
                All Contacts
              </button>
              <button
                style={{
                  background: "#ff7f50",
                  textDecoration: "none",
                  color: "white",
                }}
                className="btn btn-link"
                onClick={() => openModal("us")}
              >
                US Contacts
              </button>
              <button
                style={{
                  background: "white",
                  border: "1px solid #46139f",
                  textDecoration: "none",
                  color: "black",
                }}
                className="btn btn-link"
                onClick={() => closeModal()}
              >
                Close
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default UsContactModal;
