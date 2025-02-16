import { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import css from "./App.module.css";
import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <div className={css.contactsWrapper}>
        <SearchBox />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ContactList />
      </div>
    </section>
  );
};

export default App;
