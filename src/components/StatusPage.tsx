
import React, { useEffect } from 'react';
import { providers } from '@/data/providers';
import ProviderCard from './ProviderCard';
import SocialFooter from './SocialFooter';
import { Button } from './ui/button';
import { Github, Globe, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const StatusPage = () => {
  const { theme, setTheme } = useTheme();
  
  // Calculate overall system status
  const totalRoutes = providers.flatMap(p => p.routes).length;
  const workingRoutes = providers.flatMap(p => p.routes).filter(r => r.isWorking).length;
  const systemStatus = workingRoutes / totalRoutes;
  
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 pb-20">
      <div className="container mx-auto px-4 py-12 max-w-6xl relative">
        {/* Navigation */}
        <div className="absolute top-0 right-0 flex items-center space-x-3 py-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 text-xs font-medium hover:bg-primary/10" 
            onClick={() => window.open('https://github.com/Devs-Do-Code/a4f-local', '_blank')}
          >
            <Github size={16} />
            <span className="hidden md:inline">GitHub Repo</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 text-xs font-medium hover:bg-primary/10" 
            onClick={() => window.open('https://sree.shop', '_blank')}
          >
            <Globe size={16} />
            <span className="hidden md:inline">Visit Website</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 text-xs font-medium hover:bg-primary/10" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
        </div>
      
        {/* Branding */}
        <div className="mb-12 text-center fade-in">
          <h1 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            A4F
          </h1>
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mt-1">
            a <span className="font-bold">DevsDoCode</span> Product
          </p>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            A unified, professional Python wrapper for various reverse-engineered AI provider APIs, designed to be <span className="font-semibold">OpenAI-compatible</span> and <span className="font-semibold">easy to use</span>.
          </p>
        </div>
      
        {/* System Status Overview */}
        <div className="bg-card rounded-xl shadow-sm border border-border p-6 mb-8 fade-in-delay-200 hover:shadow-md transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-card-foreground">System Status</h2>
              <p className="mt-1 text-muted-foreground">
                {systemStatus > 0.9 
                  ? 'All systems are operating normally.' 
                  : systemStatus > 0.7 
                    ? 'Some services are experiencing issues.' 
                    : 'Multiple services are currently affected.'}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-sm transition-all duration-300 hover:scale-105"
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
                <div className="text-muted-foreground">are operational</div>
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
      
      <SocialFooter />
    </div>
  );
};

export default StatusPage;
