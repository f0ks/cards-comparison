// TODO add grouping

export const schemaMotorbikes = [
  {
    name: 'capacity',
    displayName: 'Capacity',
    fieldType: 'numeric',
    units: 'cc',
  },
  {
    'name': 'horsepower',
    'displayName': 'Horsepower',
    'type': 'numeric',
    'units': 'hp',
  },
  {
    'name': 'type',
    'displayName': 'Type',
    'type': 'enum',
    'options': ['supersport', 'naked', 'cruiser'],
  },
  {
    'name': 'weight',
    'displayName': 'Weight',
    'type': 'numeric',
    'units': 'kg',
  },
  {
    'name': 'seatheight',
    'displayName': 'Seat Height',
    'type': 'numeric',
    'units': 'mm',
  },
]