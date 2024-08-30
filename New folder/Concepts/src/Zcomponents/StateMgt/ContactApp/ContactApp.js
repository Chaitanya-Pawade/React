import { useState } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];

function ContactApp() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <>
      <h2>1.contact App</h2>
      <ContactList
        contacts={contacts}
        onSelect={(contact) => setTo(contact)}
      ></ContactList>

      <Chat key={to.email} contact={to}></Chat>
    </>
  );
}

export default ContactApp;
