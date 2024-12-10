import React from 'react';
import { DependencyCard } from './DependencyCard';
import { DependencyGroup as DependencyGroupType } from '../types/dependency';

interface DependencyGroupProps {
  group: DependencyGroupType;
}

export function DependencyGroup({ group }: DependencyGroupProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">{group.title}</h2>
        <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700">
          {group.items.length} packages
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {group.items.map((dependency) => (
          <DependencyCard key={dependency.name} dependency={dependency} />
        ))}
      </div>
    </div>
  );
}