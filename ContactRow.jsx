ContactRow.jsx
{contacts.map((contact) => (
  <ContactRow
    key={contact.id}
    name={contact.name}
    email={contact.email}
    phone={contact.phone}
  />
))}