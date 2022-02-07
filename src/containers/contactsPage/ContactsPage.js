import React, { useState, useEffect } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      addContacts(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (
      contacts.filter((contact) => contact.name === name.trim()).length !== 0
    ) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact </h2>
        {isDuplicate && <p style={{ color: "red" }}>Name already taken!</p>}
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
};
