// prettier-ignore
export class SidebarItem {

  text       : string;
  icon       : string;
  path       : string;
  moduleName : string;
  submenu    : SidebarItem[] | undefined;

  constructor() {
    this.text        = ''  ;
    this.icon        = ''  ;
    this.path        = ''  ;
    this.moduleName  = ''  ;
  }
}
