import { Consultant } from './../consultant/consultant.model';

export class Startup {
  id: number;
  name: string;
  businessLine: string;
  legalRepresentativeName: string;
  cofounderNumber: number;
  description: string;
  address: string;
  consultant: Consultant;

  constructor(
    id: number,
    name: string,
    businessLine: string,
    legalRepresentativeName: string,
    cofounderNumber: number,
    description: string,
    address: string,
    consultant: Consultant
  ) {
    this.id = id;
    this.name = name;
    this.businessLine = businessLine;
    this.legalRepresentativeName = legalRepresentativeName;
    this.cofounderNumber = cofounderNumber;
    this.description = description;
    this.address = address;
    this.consultant = consultant;
   }
}
