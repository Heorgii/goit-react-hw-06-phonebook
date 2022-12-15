import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import Notification from 'components/Notification/Notification';
import { useState } from 'react';

const ContactList = () => {
    const filter = useSelector(state => state.filter.value);
    const [contacts] = useState()

    const getContacts = () => {
        const isAddedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(isAddedFilter)
        );
    };

    const getCnt = getContacts();

    return (
        <div className={css.list_box}>
            <ul className={css.list}>
                {getCnt.length > 0 ? (
                    getCnt.map(({ id, name, number }) => (
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