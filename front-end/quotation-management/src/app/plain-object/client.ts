export class Client {
  companyId: string;
  companyName: string;
  isAuthorized: boolean;
  branch: Branch[];
  totalBranch: string;
}

export class Branch {
  branchId: string;
  branchName: string;
  branchAddress: string;
  contactPerson: Contact[];
}

export class Contact {
  personId: string;
  personName: string;
  personEmail: string;
  personNumber: string;
  personDesignation: string;
}
