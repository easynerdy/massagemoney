import React, {PropTypes} from 'react';

const Person = ({person}) => {
  return (
    <div>
      {person.lastname}, {person.firstname}
    </div>
  );
};

export default Person;
