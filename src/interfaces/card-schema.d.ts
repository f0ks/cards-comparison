

export interface CardSchema {
  name: string,
  displayName: string,
  //fieldType: 'numeric1' | 'enum', // figure out why it's not working
  fieldType: 'numeric' | 'enum' | string,
  units?: string,
  options?: string[]
}
