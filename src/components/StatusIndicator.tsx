
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
        className
      )}
      aria-label={status ? "Operational" : "Disruption"}
    />
  );
};

export default StatusIndicator;
