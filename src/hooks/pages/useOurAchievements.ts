// libs
import { useMemo, useState } from 'react';

// hook
import { useQueryGetCategory } from '@/hooks/useQuery/useQueryGetCategory';
import { useQueryGetHouse } from '../useQuery/useQueryGetHouse';
import { useQueryGetRealtys } from '../useQuery/useQueryGetRealtys';

// type
import { ReponseCategory } from '@/types/models/category';
import { TresponsePaginate } from '@/types/common/response.common';
import { ResponseHouse } from '@/types/models/house';

const useOurAchievements = () => {
  // hook state
  const [categoryID, setCategoryID] = useState('');
  const [search, setSearch] = useState('');
  const [toolsResearch, setToolsResearch] = useState<{
    search: string;
    page: number;
    limit: number;
  }>({ search: '', page: 1, limit: 9 });

  // hook service
  const {
    data: categoriesDataQuery,
    isLoading: categoriesLoading,
    isFetching: categoriesFetching,
    isError: categoriesError,
  } = useQueryGetCategory();
  const {
    data: housesDataQuery,
    isLoading: housesLoading,
    isFetching: housesFetching,
  } = useQueryGetHouse({
    ...toolsResearch,
    category_id: categoryID,
  });
  const {
    data: realtysDataQuery,
    isLoading: realtysLoading,
    isFetching: realtysFetching,
    isError: realtysError,
  } = useQueryGetRealtys();

  const categoriesData = useMemo(() => {
    if (categoriesDataQuery) {
      return categoriesDataQuery.data.map((category) => ({
        ...category,
        img_preview:
          category.name === 'บ้านเดี่ยว'
            ? '/images/detached_house_preview.webp'
            : category.name === 'ทาวน์โฮม'
              ? '/images/townhome_preview.webp'
              : category.name === 'บ้านแฝด'
                ? '/images/twinhome_preview.webp'
                : category.name === 'อาคารพาณิชย์'
                  ? '/images/commercial_building_preview.webp'
                  : category.name === 'คอนโด'
                    ? '/images/condo_preview.webp'
                    : undefined,
      }));
    }
    return [];
  }, [categoriesDataQuery]);

  const realtysData = useMemo(() => {
    if (realtysDataQuery) {
      return realtysDataQuery.data.map((realty) => ({ id: realty.id, name: realty.name }));
    }
    return [];
  }, [realtysDataQuery]);

  const handleCategoryModelHouse = (data: ReponseCategory) => {
    setCategoryID((prev) => (prev === data.id ? '' : data.id));
  };

  const handleSubmitSearch = () => {
    setToolsResearch((prev) => ({
      ...prev,
      search,
    }));
  };

  const handleClickHouseAchievements = (house_id: string) => {
    const url = new URLSearchParams();
    url.set('hiehouse-id', house_id);
    return window.document.location.pathname + '/house?' + url.toString();
  };

  return {
    categoriesData,
    realtysData,
    housesData: housesDataQuery ? housesDataQuery.data : ([] as unknown as TresponsePaginate<ResponseHouse[]>),
    isError: categoriesError,
    isLoading: categoriesLoading || categoriesFetching || realtysLoading || realtysFetching,
    isLoadingContent: housesLoading || housesLoading,
    categoryID,
    onSetSearch: setSearch,
    onHandleSubmitSearch: handleSubmitSearch,
    onCategoryModelHouse: handleCategoryModelHouse,
    onClickHouseAchievements: handleClickHouseAchievements,
  };
};

export default useOurAchievements;
