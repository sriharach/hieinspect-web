import { GET_HOUSE_LIST, GET_HOUSE_FETCH_ONCE } from '@/services/api';
import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query';
import querykeys from '../querykeys';
import { HouseListI } from '@/services/service.type';

type useQueryGetHouseFetchOnceProps<T = object> = Omit<
  UndefinedInitialDataOptions<unknown, Error, T, readonly unknown[]>,
  'queryKey'
>;

export const useQueryGetHouse = (arg: HouseListI) => {
  return useQuery({
    queryKey: [querykeys.PATH_GET_HOUSE, arg],
    queryFn: () => GET_HOUSE_LIST(arg),
  });
};

export const useQueryGetHouseFetchOnce = <T extends object>(house_id: string, options?: useQueryGetHouseFetchOnceProps<T>) => {
  return useQuery({
    queryKey: [querykeys.PATH_GET_HOUSE_ONCE, house_id],
    queryFn: () => GET_HOUSE_FETCH_ONCE(house_id),
    ...options,
  });
};
