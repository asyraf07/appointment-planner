import React from "react";

const ContactPicker = ({ contacts, setContact }) => {
  return (
    <select
      id="contact"
      name=""
      onChange={(e) => setContact(e.target.value)}
      required
    >
      <option value="">Select Contact</option>
      {contacts.map((contact) => (
        <option key={contact.name} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};

export default ContactPicker;
