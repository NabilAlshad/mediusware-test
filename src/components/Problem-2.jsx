import axios from "axios";
import React, { useEffect, useState } from "react";
import AllContactsModal from "./AllContactsModal";
import UsContactModal from "./UsContactModal";

const Problem2 = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [allContact, setAllContacts] = useState([]);
  const [usContacts, setUsContacts] = useState([]);

  const openModal = (modal) => {
    setActiveModal(modal);
  };

  const closeModal = () => {
    setActiveModal(null);
  };
  async function fetchAllContacts(value = "") {
    const response = await axios.get(
      `https://contact.mediusware.com/api/contacts/`
    );
    const result = response.data.results;
    setAllContacts(result);
  }

  async function fetchAllUsContacts() {
    const response = await axios.get(
      `https://contact.mediusware.com/api/country-contacts/united%20states/`
    );
    const result = response.data.results;
    setUsContacts(result);
  }

  useEffect(() => {
    fetchAllContacts();
    fetchAllUsContacts();
  }, []);
  console.log();
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => openModal("all")}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => openModal("us")}
          >
            US Contacts
          </button>
        </div>

        {/* all contacts modal  */}
        <AllContactsModal
          activeModal={activeModal}
          closeModal={closeModal}
          allContact={allContact}
          openModal={openModal}
        />

        {/* us contacts modal  */}
        <UsContactModal
          activeModal={activeModal}
          closeModal={closeModal}
          usContacts={usContacts}
          openModal={openModal}
        />

        {activeModal && (
          <div className="modal-backdrop" style={{ display: "block" }}></div>
        )}
      </div>
    </div>
  );
};

export default Problem2;
