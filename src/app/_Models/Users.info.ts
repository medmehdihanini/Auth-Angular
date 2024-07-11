export interface UsersInfo {
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string | null;
  dateNaissance: Date | null;
  accountlocked: boolean;
  enabled: boolean;
  lastmodifieddate: string | null; // Alternatively, use Date if you plan to parse it to a Date object
  createddate: string | null;      // Alternatively, use Date if you plan to parse it to a Date object
}
