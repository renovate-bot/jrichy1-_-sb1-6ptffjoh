import React from 'react';
import { PackageSearch } from 'lucide-react';
import { DependencyGroup } from './components/DependencyGroup';
import { groupDependencies } from './utils/dependencyUtils';
import packageJson from '../package.json';

function App() {
  const dependencies = groupDependencies(packageJson.dependencies, 'dependencies');
  const devDependencies = groupDependencies(packageJson.devDependencies, 'devDependencies');

  const groups = [
    {
      title: 'Production Dependencies',
      type: 'dependencies' as const,
      items: dependencies,
    },
    {
      title: 'Development Dependencies',
      type: 'devDependencies' as const,
      items: devDependencies,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-blue-600 rounded-lg">
            <PackageSearch className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dependency Dashboard</h1>
            <p className="text-gray-500">Manage and monitor your project dependencies</p>
          </div>
        </div>

        <div className="space-y-8">
          {groups.map((group) => (
            <DependencyGroup key={group.type} group={group} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;