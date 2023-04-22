import React, { useState } from 'react';
import css from '../ContactForm/Form.module.css';

export function ContactForm({ onAdd }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
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

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.formBlock}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
        <button type="submit">Add contact</button>
      </div>
    </form>
  );
}

// export function ContactForm() {

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = ({ target: { name, value, number } }) => {
//     this.setState({ [name]: value });
//     this.setState({ [number]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     const { onAdd } = this.props;

//     const isSuccess = onAdd({ name, number });
//     if (isSuccess) {
//       this.reset();
//     }
//   };

//   validateForm = () => {
//     const { name } = this.state;
//     const { checkName } = this.props;

//     return checkName(name);
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div className={css.formBlock}>
//           <label htmlFor="">Name</label>
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//             value={this.state.name}
//           />
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//             value={this.state.number}
//           />
//           <button type="submit">Add contact</button>
//         </div>
//       </form>
//     );
//   }
// }
