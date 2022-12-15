import { useState } from "react";
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
    const [setContacts] = useState();
    const deleteContact = e => {
        setContacts(prevState =>
            prevState.filter(contact => contact.id !== e),
        );
    };

    return (
        <li key={id} className={css.item}>
            <p className={css.contact_name}>{name} ------------ {number}</p>

            <button className={css.btn_delete_contact} type='submit' onClick={() => deleteContact(id)}>Delete</button>
        </li>
    );
}

export default ContactItem;