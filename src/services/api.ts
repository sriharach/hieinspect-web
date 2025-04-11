import axios from 'axios';
import { PATH_CATEGORY, PATH_HOUSE } from './prefix';
import { TResponse, TresponsePaginate } from '@/types/common/response..common';
import { ReponseCategory } from '@/types/models/category';
import { ResponseHouse } from '@/types/models/house';

export const GET_CATEGORIES_LIST = async () => {
  const response = await axios.get<TResponse<ReponseCategory[]>>(PATH_CATEGORY);
  return response.data;
};

export const GET_HOUSE_LIST = async (category_id?: string) => {
  const newQuery = new URL(PATH_HOUSE);

  if (category_id) newQuery.searchParams.set('category_id', String(category_id));

  const response = await axios.get<TResponse<TresponsePaginate<ResponseHouse[]>>>(newQuery.toString());
  return response.data;
};
