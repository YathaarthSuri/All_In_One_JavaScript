import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
    resData?.info;

  return (
    <div className='m-4 p-4 w-[250px] bg-[#f0f0f0] rounded-lg hover:bg-gray-400'>
      <img
        className='rounded-lg'
        alt='res-logo'
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className='font-bold py-4 text-lg'>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>Cost: {costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
