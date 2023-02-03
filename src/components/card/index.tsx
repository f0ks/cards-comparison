import React from 'react';
import './card.scss';
import {CardModel} from './card';
import {CardSchema} from '../../interfaces/card-schema';

function Card({data, schema}: { data: CardModel, schema: CardSchema[] }) {
  return (
    <div className="card">
      <h2>{data.title}</h2>
      <table>
        <tbody>
          {schema.map((field, i) =>
            <tr key={i}>
              <td>{field.displayName}</td>
              <td>{data.fields.find((item) => item.name === field.name)?.value} {field.units}</td>
            </tr>
          )}
        </tbody>

      </table>

    </div>
  );
}

export default Card;
