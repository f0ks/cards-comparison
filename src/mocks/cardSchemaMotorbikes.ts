// TODO add grouping

export const schemaMotorbikes = [
  {
    name: 'capacity',
    displayName: 'Capacity',
    fieldType: 'numeric',
    units: 'cc',
  },
  {
    name: 'horsepower',
    displayName: 'Horsepower',
    fieldType: 'numeric',
    units: 'hp',
  },
  {
    name: 'weight',
    displayName: 'Weight',
    fieldType: 'numeric',
    units: 'kg',
  },
  {
    name: 'type',
    displayName: 'Type',
    fieldType: 'enum',
    options: ['supersport', 'naked', 'cruiser'],
  },
  {
    name: 'weight',
    displayName: 'Weight',
    fieldType: 'numeric',
    units: 'kg',
  },
  {
    name: 'seatHeight',
    displayName: 'Seat Height',
    fieldType: 'numeric',
    units: 'mm',
  },
]