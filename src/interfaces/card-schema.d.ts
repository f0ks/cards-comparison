

export interface CardSchema {
  name: string,
  displayName: string,
  // fieldType: 'numeric' | 'enum', // figure out why it's not working
  fieldType: string,
  units?: string,
  options?: string[]
}
