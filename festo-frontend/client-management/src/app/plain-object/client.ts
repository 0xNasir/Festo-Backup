import {Branch} from './branch';

export class Client {
  companyId: number;
  companyName: string;
  isAuthorized: boolean;
  branch: Branch[];
  totalBranch: number;
}
