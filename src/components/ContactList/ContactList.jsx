import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import Notification from 'components/Notification/Notification';
import { useState } from 'react';

const ContactList = () => {
    const filter = useSelector(state => state.filter); //.filter.value
    console.log(filter);
    const [contacts] = useState();

    const getContacts = () => {
        const isAddedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(isAddedFilter)
        );
    };

    return (
        <div className={css.list_box}>
            <ul className={css.list}>
                {getContacts.length > 0 ? (
                    getContacts.map(({ id, name, number }) => (
                        <ContactItem
                            key={id}
                            id={id}
                            name={name}
                            number={number}
                        />
                    ))
                ) : (
                    <Notification message="Contact list is empty" />
                )}
            </ul>
        </div>

    );
}

export default ContactList;