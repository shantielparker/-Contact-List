ContactRow.jsx
import React from "react";

export default function ContactRow({ name, email, phone }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}

import React from "react";

export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

<div>
  <h2>Contact Details</h2>
  <p>Name: {contact.name}</p>
  <p>Email: {contact.email}</p>
  <p>Phone: {contact.phone}</p>
</div>