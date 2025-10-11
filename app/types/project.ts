export interface NavigationItem {
  id: string;
  label: string;
  section: string;
}

export type ProjectType =
  | 'mosaic'
  | 'pulse'
  | 'retarget'
  | 'reach'
  | 'mykorrizha'
  | 'aidea'
  | 'hybrid';

export interface ProjectNavItem {
  href: string;
  label: string;
}
