import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from './App.module.css';
import { useDispatch, useSelector } from "react-redux";
import { createItems } from "redux/contactSlice";
import { getContacts } from "redux/selector";

const App = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);

  const handleAddContact = newContact => {
    const contactsName = contacts.some(el => newContact.name === el.name);

    contactsName
      ? alert(`${newContact.name} is already in contacts.`)
      : dispatch(createItems(newContact));

    // const isNameAdded = newContact.name.toUpperCase();

    // const isAdded = contact.find(el => {
    //   return (el.name.toUpperCase() === isNameAdded);
    // });
    // console.log(contact);

    // isAdded
    //   ? alert(`${newContact.name} is already in contacts.`)
    //   : dispatch(createItems(newContact));

  };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2 className={css.contact_title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;