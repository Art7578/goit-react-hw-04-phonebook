import PropTypes from 'prop-types';
import ContactListItem from './contactListItem';
import css from './contactList.module.css';

export default function ContactList({contacts, onDeleteContact}) {
    return (
        <ul className={css.list}>
            {contacts.map(({id, name, number}) => (
                <ContactListItem
                key={id}
                name={name}
                number={number}
                id={id}
                onDelete={onDeleteContact}
                />
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func,
};
