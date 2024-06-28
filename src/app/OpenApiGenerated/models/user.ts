/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
import { Role } from '../models/role';
export interface User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  accountlocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  createddate?: string;
  credentialsNonExpired?: boolean;
  dateNaissance?: string;
  email?: string;
  enabled?: boolean;
  firstName?: string;
  id?: number;
  lastName?: string;
  lastmodifieddate?: string;
  name?: string;
  password?: string;
  roles?: Array<Role>;
  username?: string;
}
