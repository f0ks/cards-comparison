export interface Field {
  name: string,
  value: string | number
}

export interface CardModel {
  id: number,
  title: string,
  fields: Field[]

  // the rest is customizable?
}