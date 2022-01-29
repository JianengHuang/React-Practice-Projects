import React, { useState } from 'react';
import { data } from './data';
import './BirthdayReminder.css';

const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
      let newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          const { id, img, name, age } = person;
          console.log(person);
          return (
            <article key={id} className='person'>
              <img src={img} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                <button onClick={() => removeItem(id)}>Done!</button>
              </div>
            </article>
          );
        })}
        <div className='button-surround'>
          <button className='clear-btn' onClick={() => setPeople([])}>
            clear all
          </button>
        </div>
      </section>
    </main>
  );
};

export default BirthdayReminder;
