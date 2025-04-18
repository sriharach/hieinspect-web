export interface ResponseHouse {
  id: string;
  category_house_id: string;
  service_category_house_id: null;
  realitys_id: string;
  name: string;
  created_date: string;
  created_by: string;
  code_house: string;
  house_images: ReponseHouseImage[];
  category_house: {
    id: string;
    name: string;
  };
  realty: {
    id: string;
    name: string;
  };
  created_name: null;
}

export interface ReponseHouseImage {
  id: string;
  file_name: string;
  path_name: string;
  image: string;
}
