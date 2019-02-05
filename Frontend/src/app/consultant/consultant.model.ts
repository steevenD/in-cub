
export class Consultant {
  id: number;
  lastname: string;
  firstname: string;
  description: string;

  constructor(
    id: number,
    lastname: string,
    firstname: string,
    description: string
  ) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.description = description;
   }
}
