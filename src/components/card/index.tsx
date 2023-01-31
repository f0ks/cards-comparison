import React, {useEffect} from 'react';
import './card.scss';
import {CardModel} from './card';
import {CardSchema} from '../../interfaces/card-schema';

function Card({data, schema}: { data: CardModel, schema: CardSchema[] }) {
  useEffect(() => {
    // Your code here
  }, []);

  return (
    <div className="card">
      <h2>{data.title}</h2>
      <table>

      </table>
      {schema.map((field, i) => 
        <tr key={i}>
          <td>{field.displayName}</td>
          <td>{data.fields.find((item) => item.name === field.name)?.value} {field.units}</td>
        </tr>)}
    </div>
  );
}

export default Card;
