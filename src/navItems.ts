
export interface NavItem {
  id?: number;
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  expand?: boolean;
  children?: NavItem[];
}
