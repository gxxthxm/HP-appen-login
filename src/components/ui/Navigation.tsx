'use client';

import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-4 right-4 z-50">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-2">
        <div className="flex gap-2">
          <Link 
            href="/" 
            className="px-3 py-1 text-sm text-white hover:bg-white/20 rounded transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/design-system" 
            className="px-3 py-1 text-sm text-white hover:bg-white/20 rounded transition-colors"
          >
            Design System
          </Link>
          <Link 
            href="/examples" 
            className="px-3 py-1 text-sm text-white hover:bg-white/20 rounded transition-colors"
          >
            Examples
          </Link>
        </div>
      </div>
    </nav>
  );
} 