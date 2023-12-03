'use client';

import { Database } from '@/types_db';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

interface SupebaseProviderProps {
  children: React.ReactNode;
}

const SupebaseProvider = ({ children }: SupebaseProviderProps) => {
  const [supebaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supebaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupebaseProvider;
