
import React from 'react';
import { cn } from '@/lib/utils';

interface StatusIndicatorProps {
  status: boolean;
  className?: string;
}

const StatusIndicator = ({ status, className }: StatusIndicatorProps) => {
  return (
    <span 
      className={cn(
        "status-indicator",
        status ? "status-indicator-success" : "status-indicator-error",
        "inline-flex items-center justify-center transition-all duration-300 hover:scale-110",
        className
      )}
      aria-label={status ? "Operational" : "Disruption"}
      title={status ? "Operational" : "Disruption"}
    />
  );
};

export default StatusIndicator;
