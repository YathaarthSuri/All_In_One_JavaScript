import { useEffect, useState } from 'react';
import { MENU_API } from '../utils/constants';

const useRestaurantMenu = (resId) => {
  //   console.log('Inside hook');

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
