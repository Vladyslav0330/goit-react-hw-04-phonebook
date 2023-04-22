import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li>
      {name}: {number} <button onClick={() => onRemove(id)}> Delete</button>
    </li>
  );
};

export function ContactList({ contacts, onRemove }) {
  if (contacts.lenght === 0) return null;
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onRemove: PropTypes.func.isRequired,
};
