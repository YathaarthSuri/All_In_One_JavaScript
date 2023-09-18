import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const setShowIndexProps = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  // console.log(categories);

  return (
    <div className='text-center'>
      <h1 className='font-bold my-10 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>
        {cuisines.join(', ')} - {'Rs. '} {costForTwoMessage}
      </p>

      {/* Categories Accordion */}
      {categories?.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndexProps(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
