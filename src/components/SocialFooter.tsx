import React from 'react';
import { Youtube, Instagram, Twitter, Send, Linkedin, Github } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa'; // Keep react-icons for Discord

// Define social links - Icons will be styled via CSS classes now
const socialLinks = [
  { 
    icon: Youtube, 
    url: 'https://www.youtube.com/@DevsDoCode',
    ariaLabel: 'DevsDoCode YouTube Channel'
  },
  { 
    icon: Instagram, 
    url: 'https://www.instagram.com/sree.shades_/',
    ariaLabel: 'Sreejan Instagram Profile'
  },
  { 
    icon: Twitter, 
    url: 'https://x.com/Anand_Sreejan',
    ariaLabel: 'Sreejan on Twitter/X'
  },
  { 
    icon: Send, // Using Send icon for Telegram
    url: 'https://t.me/devsdocode',
    ariaLabel: 'DevsDoCode Telegram Channel'
  },
  { 
    icon: FaDiscord, // Using FaDiscord icon
    url: 'https://discord.com/invite/4gGcqsWWde', 
    ariaLabel: 'DevsDoCode Discord Server'
  },
  { 
    icon: Linkedin, 
    url: 'https://www.linkedin.com/in/developer-sreejan/',
    ariaLabel: 'Sreejan LinkedIn Profile'
  },
  { 
    icon: Github, 
    url: 'https://github.com/SreejanPersonal',
    ariaLabel: 'Sreejan GitHub Profile'
  }
];

const SocialFooter = () => {
  return (
    // Reduced top margin, kept top border, removed footer padding
    <footer className="border-t border-border mt-12"> 
      {/* Removed ALL vertical padding from container AND content elements. Using items-center for alignment. */}
      <div className="container mx-auto px-4 max-w-6xl flex flex-nowrap justify-between items-center"> 
        {/* Copyright (Left - Revised) - Removed leading-none, increased padding slightly */}
        <p className="text-xs text-muted-foreground whitespace-nowrap mr-4 py-2"> {/* Reverted to py-2 for slightly more height */}
          © {new Date().getFullYear()} A4F | All Rights Reserved.
        </p>
        
        {/* Social Icons (Right - Themed Styling) */}
        <div className="flex items-center space-x-3 flex-shrink-0"> 
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              // Reverted to py-2 for slightly more height and consistency
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 py-2" 
              >
                <IconComponent size={18} /> {/* Consistent icon size */}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default SocialFooter;
