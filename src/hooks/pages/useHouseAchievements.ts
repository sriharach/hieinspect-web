// libs
import { useState } from 'react';
import { useQueryGetHouseFetchOnce } from '../useQuery/useQueryGetHouse';
import { TResponse } from '@/types/common/response..common';
import { ResponseHouse } from '@/types/models/house';

const useHouseAchievements = () => {
  const searchParams = new URLSearchParams();
  const hieHouseID = searchParams.get('hiehouse-id');

  const [showGallery, setShowGallery] = useState(0);
  const [openShowGallery, setOpenShowGallery] = useState(false)

  // hook service
  const {
    data: houseDataOnce,
    isError: houseDataError,
    isLoading: houseDataLoading,
  } = useQueryGetHouseFetchOnce<TResponse<ResponseHouse>>(String(hieHouseID));
  console.log('houseDataOnce', houseDataOnce);

  return {
    houseDataOnce: houseDataOnce?.data,
    isError: houseDataError,
    isLoading: houseDataLoading,
    showGallery,
    openShowGallery,
    setShowGallery,
    setOpenShowGallery
  };
};

export default useHouseAchievements;
