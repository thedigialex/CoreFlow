export enum UserRole {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer'
  }
  
  export interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    token: string;
    role: UserRole;
  }
  