// prettier-ignore
export class SidebarItem {

  id         : string;
  icon       : string;
  path       : string;
  submenu    : SidebarItem[];

  constructor() {
    this.id          = '';
    this.icon        = '';
    this.path        = '';
    this.submenu     = [];
  }
}
