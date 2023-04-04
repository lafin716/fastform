export enum LicenseType {
  FREE = 'FREE',
  PRO = 'PRO',
  ENTERPRISE = 'ENTERPRISE',
}

export enum LicenseStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export const LicenseSet = {
  FREE: {
    type: LicenseType.FREE,
    status: LicenseStatus.ACTIVE,
  },
  PRO: {
    type: LicenseType.PRO,
    status: LicenseStatus.ACTIVE,
  },
  ENTERPRISE: {
    type: LicenseType.ENTERPRISE,
    status: LicenseStatus.ACTIVE,
  },
};
