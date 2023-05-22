import { useState } from "react";
import PropTypes from 'prop-types';
import css from './contactForm.module.css';


const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        const {name, value} = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
                default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit({name, number});
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <label className={css.label}>
                Name
                <input 
                className={css.input}
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я])?[a-zA-Za-яА-Я]*)*$"
                title="Name may contact only letters, apostrophe, dash and sapces. For example Adrain, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </label>
            <label className={css.label}>
                Number
                <input className={css.input}
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" 
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </label>
            <button type="submit" className={css.button}>
                Add contact
            </button>
        </form>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};

export default ContactForm;