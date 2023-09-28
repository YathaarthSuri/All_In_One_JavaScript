import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import NameContext from '../utils/NameContext';

const Body = () => {
  const [resListData, setResListData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  const { loggedInUser, setUserName } = useContext(NameContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();

    setResListData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you're offline</h1>;
  }

  return filteredRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className='flex items-center'>
        <div className='m-4 p-4'>
          <input
            className='border border-solid border-black'
            type='text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className='px-4 py-2 bg-green-100 m-4 rounded-lg'
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // console.log(searchText);

              const filteredRestaurant = resListData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              console.log(filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className='m-4 p-4'>
          <button
            className='px-4 py-2 bg-gray-100 rounded-lg'
            onClick={() => {
              const filteredList = resListData.filter(
                (res) => res.info.avgRating > 4.0
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        {/* <div className='m-4 p-4'>
          <label>Type UserName : </label>
          <input
            className='px-2 border border-black'
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
        </div> */}
      </div>

      <div className='flex flex-wrap'>
        {filteredRestaurant?.map((restaurant) => {
          return (
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              key={restaurant?.info?.id}
              to={'/restaurant/' + restaurant?.info?.id}
            >
              {restaurant?.info?.isOpen ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
