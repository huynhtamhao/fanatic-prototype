export interface User {
  userId: string;
  lastName: string;
  firstName: string;
  mailAddress: string;
  inputPassword: string;
  passwordChangeRequest: number;
  rolePermissions: any;
}

export interface InConfiguration {
  layout: {
    rtl: boolean;
    variant: string;
    theme_color: string;
    logo_bg_color: string;
    sidebar: {
      collapsed: boolean;
      backgroundColor: string;
    };
  };
}
