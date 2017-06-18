import React, {PropTypes} from 'react';
import Person from './Person';

const PeopleList = ({people}) => {
  return (
    <div>
      {people.map((person) => 
        <Person key={person.lastname} person={person} />  
      )}
    </div>
  );
};

export default PeopleList;
