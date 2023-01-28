import React, {useEffect} from 'react';
import './card.scss';
import {CardModel} from './card';
import {CardSchema} from '../../interfaces/card-schema';

function Card({data, schema}: {data: CardModel, schema: CardSchema[]}) {
  useEffect(() => {
    // Your code here
  }, []);

  return (
    <div className="card">
      <h2>{data.title}</h2>
      <table>
        <tr>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default Card;
