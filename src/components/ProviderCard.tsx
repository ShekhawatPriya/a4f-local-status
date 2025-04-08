
import React from 'react';
import { Route } from '@/types';
import RouteStatus from './RouteStatus';

interface ProviderCardProps {
  name: string;
  routes: Route[];
  className?: string;
}

const ProviderCard = ({ name, routes, className = "" }: ProviderCardProps) => {
  // Calculate overall status - provider is working if at least one route is working
  const isProviderWorking = routes.some(route => route.isWorking);
  
  // Count working routes
  const workingRoutesCount = routes.filter(route => route.isWorking).length;
  
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`}>
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100">
            {workingRoutesCount}/{routes.length} operational
          </div>
        </div>
      </div>
      
      <div className="px-6">
        {routes.map((route) => (
          <RouteStatus
            key={route.name}
            name={route.name}
            isWorking={route.isWorking}
            details={route.details}
          />
        ))}
      </div>
    </div>
  );
};

export default ProviderCard;
