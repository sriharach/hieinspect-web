import axios from 'axios';
import { PATH_CATEGORY, PATH_HOUSE, PATH_REALTYS } from './prefix';
import { TResponse, TresponsePaginate } from '@/types/common/response.common';
import { ReponseCategory } from '@/types/models/category';
import { ResponseHouse } from '@/types/models/house';
import { HouseListI } from './service.type';
import { ResponseRealtys } from '@/types/models/realtys';

export const GET_CATEGORIES_LIST = async () => {
  const response = await axios.get<TResponse<ReponseCategory[]>>(PATH_CATEGORY);
  return response.data;
};

export const GET_REALTYS_LIST = async () => {
  const response = await axios.get<TResponse<ResponseRealtys[]>>(PATH_REALTYS);
  return response.data;
};

// house
export const GET_HOUSE_LIST = async (props: HouseListI) => {
  const newQuery = new URL(PATH_HOUSE);

  if (props.category_id) newQuery.searchParams.set('category_id', String(props.category_id));
  if (props.page) newQuery.searchParams.set('page', String(props.page));
  if (props.limit) newQuery.searchParams.set('limit', String(props.limit));
  if (props.search) newQuery.searchParams.set('search', String(props.search));

  const response = await axios.get<TResponse<TresponsePaginate<ResponseHouse[]>>>(newQuery.toString());
  return response.data;
};

export const GET_HOUSE_FETCH_ONCE = async (house_id: string) => {
  const response = await axios.get<TResponse<ResponseHouse>>(`${PATH_HOUSE}/${house_id}`);
  return response.data;
}
