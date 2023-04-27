import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const localStorageData = JSON.parse(localStorage.getItem('contacts')) || [];

export function App() {
  const [contacts, setContacts] = useState(localStorageData);
  const [filterContacts, setFilterContacts] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleCheckName = number => {
    const isExistContact = contacts.some(
      contact => contact.number.toLowerCase() === number.toLowerCase()
    );
    return isExistContact;
  };

  const handleAddContact = (name, number) => {
    if (handleCheckName(number)) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    const newContact = { name, number, id: nanoid() };
    setContacts(contacts => [...contacts, newContact]);
    return true;
  };
  const handleFilterChange = value => {
    setFilterContacts(value);
  };

  const handleRemoveContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  const visibleContacts = () => {
    const normalizeFilter = filterContacts.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  return (
    <div className="form">
      <h2>Phonebook</h2>
      <ContactForm onAdd={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilterChange} />
      <ContactList
        contacts={visibleContacts()}
        onRemove={handleRemoveContact}
      />
    </div>
  );
}
