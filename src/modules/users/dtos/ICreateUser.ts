interface ICreateUser {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

export { ICreateUser };
