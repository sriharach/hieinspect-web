// libs
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

// hook
import { useQueryGetHouseFetchOnce } from '../useQuery/useQueryGetHouse';

// type
import { TResponse } from '@/types/common/response..common';
import { ResponseHouse } from '@/types/models/house';

const useHouseAchievements = () => {
  const searchParams = useSearchParams();
  const hieHouseID = searchParams.get('hiehouse-id');

  const [showGallery, setShowGallery] = useState(0);
  const [openShowGallery, setOpenShowGallery] = useState(false);

  // hook service
  const {
    data: houseDataOnce,
    isError: houseDataError,
    isLoading: houseDataLoading,
  } = useQueryGetHouseFetchOnce<TResponse<ResponseHouse>>(String(hieHouseID));

  return {
    houseDataOnce: houseDataOnce?.data,
    isError: houseDataError,
    isLoading: houseDataLoading,
    showGallery,
    openShowGallery,
    setShowGallery,
    setOpenShowGallery,
  };
};

export default useHouseAchievements;
