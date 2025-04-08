
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import StatusIndicator from './StatusIndicator';
import { cn } from '@/lib/utils';

interface RouteStatusProps {
  name: string;
  isWorking: boolean;
  details?: string;
}

const RouteStatus = ({ name, isWorking, details }: RouteStatusProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const hasDetails = !isWorking && details;
  
  return (
    <div className="py-3 border-b border-border last:border-0">
      <div 
        className={cn(
          "flex items-center justify-between transition-all",
          hasDetails ? "hover:opacity-80 cursor-pointer" : "cursor-default"
        )}
        onClick={() => hasDetails && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <StatusIndicator status={isWorking} />
          <span className="font-medium text-sm text-foreground">{name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className={cn(
            "text-sm font-medium",
            isWorking ? "text-emerald-600 dark:text-emerald-400" : "text-red-500 dark:text-red-400"
          )}>
            {isWorking ? "Operational" : "Disruption"}
          </span>
          {hasDetails && (
            <button 
              className="p-1 rounded-full hover:bg-accent transition-colors"
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
              {isExpanded ? 
                <ChevronUp className="h-4 w-4 text-muted-foreground" /> : 
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              }
            </button>
          )}
        </div>
      </div>
      
      {hasDetails && isExpanded && (
        <div className="mt-2 pl-6 pr-2 py-2 text-sm text-muted-foreground bg-accent/30 rounded-md animate-accordion-down">
          {details}
        </div>
      )}
    </div>
  );
};

export default RouteStatus;
