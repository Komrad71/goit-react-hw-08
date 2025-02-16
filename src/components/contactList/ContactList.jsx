import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  if (!Array.isArray(filteredContacts) || filteredContacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.contactListItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
