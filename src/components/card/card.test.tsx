import { render, screen } from '@testing-library/react';
import React from 'react';

import Card from "./index";
import {schemaMotorbikes} from '../../mocks/cardSchemaMotorbikes';
import {motorbikesData} from '../../mocks/motorbikesData';
test('renders learn react link', () => {
  render(<Card data={motorbikesData[0]} schema={schemaMotorbikes} />);
  const linkElement = screen.getByText(/Honda CB300r/i);
  expect(linkElement).toBeInTheDocument();
});
