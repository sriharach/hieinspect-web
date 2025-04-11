import { GET_CATEGORIES_LIST } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import querykeys from '../querykeys';

export const useQueryGetCategory = () => {
  return useQuery({
    queryKey: [querykeys.PATH_GET_CATEGORY],
    queryFn: GET_CATEGORIES_LIST,
  });
};
