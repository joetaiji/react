import React from 'react';
import { getImageUrl } from './Util.js';

export default function Gallery({ person, size}) {
  return (
    <img
	  src={getImageUrl(person)}
	  alt={person.name}
	  width={size}
	  height={size}
	  className='avatar'
	/>
  );
}