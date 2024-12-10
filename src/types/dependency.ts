export interface Dependency {
  name: string;
  version: string;
  type: 'dependencies' | 'devDependencies';
  latest?: string;
  isOutdated?: boolean;
}

export interface DependencyGroup {
  title: string;
  type: 'dependencies' | 'devDependencies';
  items: Dependency[];
}