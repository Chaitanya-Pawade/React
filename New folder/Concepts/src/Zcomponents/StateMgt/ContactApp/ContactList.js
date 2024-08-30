function ContactList({ contacts, onSelect }) {
  return (
    <div>
      <h4>contact list</h4>

      {contacts.name}
      <section>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.email}>
              <button
                onClick={() => {
                  onSelect(contact);
                }}
              >
                {contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ContactList;
