'use client';

// lib
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { addToast } from '@heroui/toast';

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        if (error instanceof AxiosError) {
          if (error.code == 'ERR_BAD_RESPONSE') {
            addToast({ title: 'Service failure, please try again.', color: 'danger' });
            throw error;
          }
          addToast({ title: 'Unable to connect', color: 'danger' });
          throw error;
        }
      },
    }),
    defaultOptions: {
      queries: {
        retry: 2,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
