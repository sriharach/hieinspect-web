import { TpaginateResponse } from "./paginate.common";

export interface TResponse<T = unknown> {
  data: T;
  status_code: number;
}

export interface TresponsePaginate<T = unknown> {
  data: T;
  meta: TpaginateResponse;
}
