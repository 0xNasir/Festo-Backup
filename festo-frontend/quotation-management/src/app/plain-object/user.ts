export class User {
  user: UserInfo;
  appList: AppList[];
  permission: any;
  primeAccess: any;
}

export class UserInfo {
  fullName: string;
  userId: string;
  username: string;
  HTTP_USER_AGENT: string;
}

export class AppList {
  appId: number;
  appName: string;
  url: string;
  sessAryName: string;
  remark: string;
  disabled: number;
}
