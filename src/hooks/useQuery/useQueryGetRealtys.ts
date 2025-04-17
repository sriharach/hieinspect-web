import { GET_REALTYS_LIST } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import querykeys from '../querykeys';

export const useQueryGetRealtys = () => {
  return useQuery({
    queryKey: [querykeys.PATH_GET_REALTYS],
    queryFn: GET_REALTYS_LIST,
    enabled: false
  });
};
