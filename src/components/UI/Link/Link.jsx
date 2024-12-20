import React from 'react';

export const Link = ({ href, className, children }) => (
     <a href={href} className={className}>
          {children}
     </a>
);
