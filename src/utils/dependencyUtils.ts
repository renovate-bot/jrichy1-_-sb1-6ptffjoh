import { Dependency, DependencyGroup } from '../types/dependency';

export function groupDependencies(dependencies: Record<string, string>, type: 'dependencies' | 'devDependencies'): Dependency[] {
  return Object.entries(dependencies).map(([name, version]) => ({
    name,
    version: version.replace('^', ''),
    type,
  }));
}

export function formatVersion(version: string): string {
  return version.startsWith('^') ? version.substring(1) : version;
}