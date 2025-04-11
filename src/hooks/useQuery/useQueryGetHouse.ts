import { GET_HOUSE_LIST } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import querykeys from '../querykeys';

export const useQueryGetHouse = (category_id?: string) => {
  return useQuery({
    queryKey: [querykeys.PATH_GET_HOUSE, category_id],
    queryFn: () => GET_HOUSE_LIST(category_id),
  });
};
