import React from 'react';
import { Package } from 'lucide-react';
import { Dependency } from '../types/dependency';

interface DependencyCardProps {
  dependency: Dependency;
}

export function DependencyCard({ dependency }: DependencyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Package className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{dependency.name}</h3>
            <p className="text-sm text-gray-500">v{dependency.version}</p>
          </div>
        </div>
        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700">
          {dependency.type === 'dependencies' ? 'prod' : 'dev'}
        </span>
      </div>
    </div>
  );
}