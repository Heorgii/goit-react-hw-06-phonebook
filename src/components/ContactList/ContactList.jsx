import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import Notification from 'components/Notification/Notification';
import { useState } from 'react';

const ContactList = () => {
    const filter = useSelector(state => state.filter); //.filter.value
    console.log(filter);
    const [contacts, setContacts] = useState();

    const getContacts = () => {
        const isAddedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(isAddedFilter)
        );
    };

    const deleteContact = e => {
        setContacts(prevState =>
            prevState.filter(contact => contact.id !== e),
        );
    };

    return (
        <div className={css.list_box}>
            <ul className={css.list}>
                {getContacts.length > 0 ? (
                    getContacts.map(({ id, name, number }) => (
                        <li key={id} className={css.item}>
                            <p className={css.contact_name}>{name} ------------ {number}</p>

                            <button className={css.btn_delete_contact} type='submit' onClick={() => deleteContact(id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <Notification message="Contact list is empty" />
                )}
            </ul>
        </div>

    );
}

export default ContactList;