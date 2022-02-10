// prettier-ignore
export class SidebarItem {

  id         : string;
  icon       : string;
  path       : string;
  moduleName : string;
  submenu    : SidebarItem[];

  constructor() {
    this.id          = '';
    this.icon        = '';
    this.path        = '';
    this.moduleName  = '';
    this.submenu     = [];
  }
}
