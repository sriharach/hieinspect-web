import { GET_HOUSE_LIST } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import querykeys from '../querykeys';
import { HouseListI } from '@/services/service.type';

export const useQueryGetHouse = (arg: HouseListI) => {
  return useQuery({
    queryKey: [querykeys.PATH_GET_HOUSE, arg],
    queryFn: () => GET_HOUSE_LIST(arg),
  });
};
