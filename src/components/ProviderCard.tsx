
import React from 'react';
import { Route } from '@/types';
import RouteStatus from './RouteStatus';
import { cn } from '@/lib/utils';

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
    <div className={cn(
      "bg-card rounded-xl shadow-sm border border-border overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1", // Added hover effects
      className
    )}>
      <div className="px-6 py-5 border-b border-border">
        <div className="flex justify-between items-center gap-4"> {/* Added gap */}
          <h3 className="font-semibold text-lg text-card-foreground flex-shrink-0">{name}</h3> {/* Prevent shrinking */}
          <div className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground whitespace-nowrap"> {/* Prevent wrapping */}
            {workingRoutesCount}/{routes.length} operational
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4"> {/* Added padding and vertical space */}
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
