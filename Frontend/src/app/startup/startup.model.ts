import { Consultant } from './../consultant/consultant.model';

export class Startup {
  _id: number;
  name: string;
  businessLine: string;
  legalRepresentativeName: string;
  cofounderNumber: number;
  description: string;
  address?: string = null;
  consultant: Consultant;

  constructor(
    _id: number,
    name: string,
    businessLine: string,
    legalRepresentativeName: string,
    cofounderNumber: number,
    description: string,
    address: string,
    consultant: Consultant
  ) {
    this._id = _id;
    this.name = name;
    this.businessLine = businessLine;
    this.legalRepresentativeName = legalRepresentativeName;
    this.cofounderNumber = cofounderNumber;
    this.description = description;
    this.address = address;
    this.consultant = consultant;
   }
}
