
import React from 'react';
import { providers } from '@/data/providers';
import ProviderCard from './ProviderCard';

const StatusPage = () => {
  // Calculate overall system status
  const totalRoutes = providers.flatMap(p => p.routes).length;
  const workingRoutes = providers.flatMap(p => p.routes).filter(r => r.isWorking).length;
  const systemStatus = workingRoutes / totalRoutes;
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 fade-in">
            AI System Status
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl fade-in-delay-100">
            A unified, professional Python wrapper for various reverse-engineered AI provider APIs, designed to be <span className="font-semibold">OpenAI-compatible</span> and <span className="font-semibold">easy to use</span>.
          </p>
        </div>
      </header>
      
      {/* System Status Overview */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 fade-in-delay-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">System Status</h2>
              <p className="mt-1 text-gray-600">
                {systemStatus > 0.9 
                  ? 'All systems are operating normally.' 
                  : systemStatus > 0.7 
                    ? 'Some services are experiencing issues.' 
                    : 'Multiple services are currently affected.'}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold"
                style={{
                  backgroundColor: systemStatus > 0.9 
                    ? '#10b981' 
                    : systemStatus > 0.7 
                      ? '#f59e0b' 
                      : '#ef4444'
                }}
              >
                {Math.round(systemStatus * 100)}%
              </div>
              <div className="text-sm">
                <div className="font-semibold">{workingRoutes} of {totalRoutes} routes</div>
                <div className="text-gray-500">are operational</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {providers.map((provider, index) => (
            <ProviderCard 
              key={provider.id}
              name={provider.name}
              routes={provider.routes}
              className={`fade-in-delay-${index < 4 ? (index + 3) * 100 : 300}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
