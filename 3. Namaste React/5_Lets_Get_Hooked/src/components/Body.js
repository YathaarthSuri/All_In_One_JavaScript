import { resList } from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';

const Body = () => {
  // Local state variable - super powerful variable
  const [resListData, setResListData] = useState(resList);

  // Normal JS Variable
  // let resListData = [
  // {
  //   info: {
  //     id: '26724',
  //     name: 'KFC',
  //     cloudinaryImageId: '56c9ab92bd79745fd152a30fa2525426',
  //     locality: 'West Patel Nagar',
  //     areaName: 'West Patel Nagar',
  //     costForTwo: '₹400 for two',
  //     cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //     avgRating: 3.8,
  //     parentId: '547',
  //     avgRatingString: '3.8',
  //     totalRatingsString: '10K+',
  //   },
  // },
  // {
  //   info: {
  //     id: '26729',
  //     name: 'Dominos',
  //     cloudinaryImageId: '56c9ab92bd79745fd152a30fa2525426',
  //     locality: 'West Patel Nagar',
  //     areaName: 'West Patel Nagar',
  //     costForTwo: '₹400 for two',
  //     cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //     avgRating: 4.2,
  //     parentId: '547',
  //     avgRatingString: '4.2',
  //     totalRatingsString: '10K+',
  //   },
  // },
  // ];

  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredList = resListData.filter(
              (ele) => ele.info.avgRating > 4.0
            );
            setResListData(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {resListData.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
