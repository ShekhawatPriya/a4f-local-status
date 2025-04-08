
import React from 'react';
import { Youtube, Instagram, Twitter, MessageCircle, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

const socialLinks = [
  { 
    icon: <Youtube size={18} />, 
    label: 'YouTube', 
    url: 'https://www.youtube.com/@DevsDoCode',
    ariaLabel: 'DevsDoCode YouTube Channel'
  },
  { 
    icon: <Instagram size={18} />, 
    label: 'Instagram', 
    url: 'https://www.instagram.com/sree.shades_/',
    ariaLabel: 'Sreejan Instagram Profile'
  },
  { 
    icon: <Twitter size={18} />, 
    label: 'Twitter/X', 
    url: 'https://x.com/Anand_Sreejan',
    ariaLabel: 'Sreejan on Twitter/X'
  },
  { 
    icon: <MessageCircle size={18} />, 
    label: 'Telegram', 
    url: 'https://t.me/devsdocode',
    ariaLabel: 'DevsDoCode Telegram Channel'
  },
  { 
    icon: <MessageCircle size={18} />, 
    label: 'Discord', 
    url: 'https://discord.com/invite/4gGcqsWWde', 
    ariaLabel: 'DevsDoCode Discord Server'
  },
  { 
    icon: <Linkedin size={18} />, 
    label: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/developer-sreejan/',
    ariaLabel: 'Sreejan LinkedIn Profile'
  },
  { 
    icon: <Github size={18} />, 
    label: 'GitHub', 
    url: 'https://github.com/SreejanPersonal',
    ariaLabel: 'Sreejan GitHub Profile'
  }
];

const SocialFooter = () => {
  return (
    <footer className="py-8 border-t border-border mt-auto">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-xs font-medium hover:scale-105 transition-transform"
              onClick={() => window.open(link.url, '_blank')}
              aria-label={link.ariaLabel}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.label}</span>
            </Button>
          ))}
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} A4F, a <span className="font-semibold">DevsDoCode</span> Product. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SocialFooter;
