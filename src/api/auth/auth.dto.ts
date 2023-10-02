export interface LoginDto {
  passwd: string;
  username: string;
  user_type
}

export interface LoginResponseDto {
  token: string;
  user: User;
  error?: any;
  status?: any;

}


export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  mobileNo: string;
  emailId: string;
  dept: string;
  role: string;
  status: string;
  passwd: string;
  lastLoginDt: string;
  companyId?: any;
  userType?: any;
  passwdExp: string;
  createdOn: string;
  newUsrPasswdExp: string;
  countryCode?: any;
  createdBy: string;
  createdDt: string;
  modifyBy: string;
  modifyDt?: any;
  authBy: string;
  authDt: string;
  authStatus: string;
  loginAttempt: number;
  lockTime: string;
  referenceId: string;
  password: string;
  enabled: boolean;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  authorities: Authority[];
  username: string;
}

export interface Authority {
  authority: string;
}

export interface DecodedJWT{
  usrLvlCode: string;
  permissions: string[];
  sub: string;
  iat: number;
  exp: number;

}