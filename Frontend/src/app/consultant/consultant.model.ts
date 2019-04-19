
export class Consultant {
  _id: number;
  lastname: string;
  firstname: string;
  description: string;

  constructor(
    _id: number,
    lastname: string,
    firstname: string,
    description: string
  ) {
    this._id = _id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.description = description;
   }
}
