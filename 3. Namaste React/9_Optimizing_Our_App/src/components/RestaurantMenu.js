import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  // console.log('Inside component before hook');
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  //   console.log(params);

  const resInfo = useRestaurantMenu(resId);

  // console.log('Inside component after hook');

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();

  //   setResInfo(json);

  //   console.log(json);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className='menu'>
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} - {'Rs. '} {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards
          ? itemCards?.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} - {'Rs. '}{' '}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </li>
            ))
          : resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
              (item) => (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name} - {'Rs. '}{' '}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </li>
              )
            )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
