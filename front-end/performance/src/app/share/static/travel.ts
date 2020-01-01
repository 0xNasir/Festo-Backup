export class Travel {
  public static appName = 'Work Performance';
  public static ipAddress = 'http://127.0.0.1';
  public static activityURL = Travel.ipAddress + '/performance/?api=base/activity';
  public static allactivityURL = Travel.ipAddress + '/performance/?api=base/work-all';
  public static authURL = Travel.ipAddress + '/performance/?api=auth/guard';
  public static userURL = Travel.ipAddress + '/performance/?api=auth/user';
  public static swassertiveURL = Travel.ipAddress + '/swassertive';
  public static baseURL = Travel.ipAddress + '/performance/';
  public static searchCompanyURL = Travel.ipAddress + '/client-management/?api=base/searchClient';
}
