export enum RoleTypes {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export const RoleSet = {
  ADMIN: [RoleTypes.ADMIN, RoleTypes.USER],
  USER: [RoleTypes.USER],
};
