// libs
import { useMemo, useState } from 'react';

// hook
import { useQueryGetCategory } from '@/hooks/useQuery/useQueryGetCategory';
import { useQueryGetHouse } from '../useQuery/useQueryGetHouse';

// type
import { ReponseCategory } from '@/types/models/category';

const useOurwork = () => {
  const [categoryID, setCategoryID] = useState('');
  const [toolsResearch, setToolsResearch] = useState<{
    search: string;
    page: number;
    limit: number;
  }>({ search: '', page: 1, limit: 10 });

  // hook service
  const {
    data: categoriesDataQuery,
    isLoading: categoriesLoading,
    isFetching: categoriesFetching,
    isError: categoriesError,
  } = useQueryGetCategory();
  const { data: housesDataQuery } = useQueryGetHouse({
    ...toolsResearch,
    category_id: categoryID,
  });
  console.log('housesDataQuery', housesDataQuery);

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
            : '',
      }));
    }
    return [];
  }, [categoriesDataQuery]);

  const handleCategoryModelHouse = (data: ReponseCategory) => {
    setCategoryID((prev) => (prev === data.id ? '' : data.id));
  };

  return {
    categoriesData,
    housesData: housesDataQuery ? housesDataQuery.data.data : [],
    isError: categoriesError,
    isLoading: categoriesLoading || categoriesFetching,
    categoryID,
    onCategoryModelHouse: handleCategoryModelHouse,
    onSetToolsResearch: setToolsResearch,
  };
};

export default useOurwork;
