import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({
  data,
  showItems,
  setShowItems,
  setShowIndex,
}) => {
  //   const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className='w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4'>
        <div
          className='flex justify-between cursor-pointer'
          onClick={handleClick}
        >
          <span className='font-bold text-lg'>
            {data.title} ({data.itemCards.length})
          </span>
          {showItems ? <span>⬆️</span> : <span>⬇️</span>}
        </div>
        {/* Accordion body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
