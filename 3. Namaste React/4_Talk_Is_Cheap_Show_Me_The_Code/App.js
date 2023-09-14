import React from 'react';
import ReactDOM from 'react-dom/client';

/** 
* Header
  - Logo
  - Nav Items
* Body
  - Search
  - Restaurant Container
    - Restaurant Card
      - Img
      - Name, star rating, cuisines, delivery time
* Footer
  - Copyright
  - Links
  - Address
  - Contact
*/

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://static.vecteezy.com/system/resources/previews/007/500/121/non_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styleCard = {
//   backgroundColor: 'yellow',
// };

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
    resData?.info;

  return (
    <div
      className='res-card'
      // style={styleCard}
      // style={{ backgroundColor: 'yellow', color: 'green' }}
    >
      <img
        className='res-logo'
        alt='res-logo'
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>Cost: {costForTwo}</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: '26724',
      name: 'KFC',
      cloudinaryImageId: '56c9ab92bd79745fd152a30fa2525426',
      locality: 'West Patel Nagar',
      areaName: 'West Patel Nagar',
      costForTwo: '₹400 for two',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '26724',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4100,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4100,
      },
      parentId: '547',
      avgRatingString: '4.2',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.5,
        serviceability: 'SERVICEABLE',
        slaString: '16 mins',
        lastMileTravelString: '1.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-13 23:59:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/kfc-west-patel-nagar-delhi-26724',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '32127',
      name: 'Burger King',
      cloudinaryImageId: 'e33e1d3ba7d6b2bb0d45e1001b731fcf',
      locality: 'Ajmal Khan Road',
      areaName: 'Karol Bagh',
      costForTwo: '₹350 for two',
      cuisines: ['Burgers', 'American'],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '32127',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3600,
      },
      parentId: '166',
      avgRatingString: '4.2',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.8,
        serviceability: 'SERVICEABLE',
        slaString: '18 mins',
        lastMileTravelString: '1.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-14 03:45:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/burger-king-ajmal-khan-road-karol-bagh-delhi-32127',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '253722',
      name: "McDonald's",
      cloudinaryImageId: '6dc3ed2ca21d71acff7c2a51dfe4c720',
      locality: 'Rachna Cinema Complex',
      areaName: 'Rajendra Place',
      costForTwo: '₹400 for two',
      cuisines: ['American'],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '253722',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3600,
      },
      parentId: '630',
      avgRatingString: '4.2',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.6,
        serviceability: 'SERVICEABLE',
        slaString: '19 mins',
        lastMileTravelString: '0.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-14 03:45:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/mcdonalds-rachna-cinema-complex-rajendra-place-delhi-253722',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '128116',
      name: "La Pino'z Pizza",
      cloudinaryImageId: 'hgvtyqrxzvpwmbs361er',
      locality: 'Kamla Nagar',
      areaName: 'Kamla Nagar',
      costForTwo: '₹250 for two',
      cuisines: ['Pizzas', 'Pastas', 'Italian', 'Desserts', 'Beverages'],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: '128116',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 6000,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 6000,
      },
      parentId: '4961',
      avgRatingString: '3.9',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 34,
        lastMileTravel: 6.4,
        serviceability: 'SERVICEABLE',
        slaString: '34 mins',
        lastMileTravelString: '6.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-14 03:45:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/la-pinoz-pizza-kamla-nagar-delhi-128116',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '435678',
      name: 'Pizza Hut',
      cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
      locality: 'Western Extension Area',
      areaName: 'Karol Bagh',
      costForTwo: '₹350 for two',
      cuisines: ['Pizzas'],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '435678',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3600,
      },
      parentId: '721',
      avgRatingString: '3.8',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.1,
        serviceability: 'SERVICEABLE',
        slaString: '26 mins',
        lastMileTravelString: '2.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-14 04:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/pizza-hut-western-extension-area-karol-bagh-delhi-435678',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '20055',
      name: 'Subway',
      cloudinaryImageId: '1ace5fa65eff3e1223feb696c956b38b',
      locality: 'Karol Bagh',
      areaName: 'Patel Nagar, Connaught Place',
      costForTwo: '₹350 for two',
      cuisines: ['Salads', 'Snacks', 'Desserts', 'Beverages'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '20055',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3600,
      },
      parentId: '2',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 13,
        lastMileTravel: 0.4,
        serviceability: 'SERVICEABLE',
        slaString: '13 mins',
        lastMileTravelString: '0.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-20 00:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '40% OFF',
        subHeader: 'UPTO ₹80',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/subway-karol-bagh-patel-nagar-connaught-place-delhi-20055',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '422811',
      name: 'Dashi - Dimsum & Sushi Bar',
      cloudinaryImageId: 'r2gipozznjw0ghzxf7xd',
      locality: 'Main shankar road',
      areaName: 'Rajinder Nagar',
      costForTwo: '₹1000 for two',
      cuisines: ['Japanese'],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: '422811',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4100,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4100,
      },
      parentId: '262021',
      avgRatingString: '4.4',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.6,
        serviceability: 'SERVICEABLE',
        slaString: '18 mins',
        lastMileTravelString: '1.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-13 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/dashi-dimsum-and-sushi-bar-main-shankar-road-rajinder-nagar-delhi-422811',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '343711',
      name: 'Chaayos Chai+Snacks=Relax',
      cloudinaryImageId: '2beebd3688e63e027ee8a11c1c8a72c8',
      locality: 'Karol Bagh',
      areaName: 'East Patel Nagar',
      costForTwo: '₹250 for two',
      cuisines: [
        'Bakery',
        'Beverages',
        'Chaat',
        'Desserts',
        'Fast Food',
        'Home Food',
        'Italian',
        'Maharashtrian',
        'Snacks',
        'Street Food',
        'Sweets',
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '343711',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3600,
      },
      parentId: '281782',
      avgRatingString: '4.1',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.9,
        serviceability: 'SERVICEABLE',
        slaString: '17 mins',
        lastMileTravelString: '0.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-14 02:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-karol-bagh-east-patel-nagar-delhi-343711',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '51710',
      name: 'Theobroma',
      cloudinaryImageId: 'b033728dcb0101ceb19bff0e1e1f6474',
      locality: 'Karol Bagh',
      areaName: 'East Patel Nagar',
      costForTwo: '₹800 for two',
      cuisines: ['Bakery', 'Desserts'],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: '51710',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4100,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4100,
      },
      parentId: '1040',
      avgRatingString: '4.4',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 14,
        lastMileTravel: 0.9,
        serviceability: 'SERVICEABLE',
        slaString: '14 mins',
        lastMileTravelString: '0.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-13 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '10% OFF',
        subHeader: 'ABOVE ₹159',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/theobroma-karol-bagh-east-patel-nagar-delhi-51710',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '79296',
      name: 'Faasos - Wraps & Rolls',
      cloudinaryImageId: 'af33b81798b11deba338e94b7585d348',
      locality: 'DDA Market',
      areaName: 'Rajendra Place',
      costForTwo: '₹200 for two',
      cuisines: [
        'Kebabs',
        'Fast Food',
        'Snacks',
        'North Indian',
        'American',
        'Healthy Food',
        'Desserts',
        'Beverages',
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: '79296',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3600,
      },
      parentId: '21809',
      avgRatingString: '4.0',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.5,
        serviceability: 'SERVICEABLE',
        slaString: '19 mins',
        lastMileTravelString: '0.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-13 23:59:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-dda-market-rajendra-place-delhi-79296',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '15503',
      name: 'Wow! Momo',
      cloudinaryImageId: '0984acc0ed7b914206dbbcb90297becc',
      locality: 'Ajmal Khan Road',
      areaName: 'Karol Bagh',
      costForTwo: '₹300 for two',
      cuisines: [
        'Tibetan',
        'Healthy Food',
        'Asian',
        'Chinese',
        'Snacks',
        'Continental',
        'Desserts',
        'Beverages',
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '15503',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3600,
      },
      parentId: '1776',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.4,
        serviceability: 'SERVICEABLE',
        slaString: '20 mins',
        lastMileTravelString: '1.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-14 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'EVERY ITEM',
        subHeader: '@ ₹99',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/wow-momo-ajmal-khan-road-karol-bagh-delhi-15503',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '425868',
      name: 'Havmor Havfunn Ice cream',
      cloudinaryImageId: '49845b494b1e637209b7bd1c7ca184ad',
      locality: 'Karol Bagh',
      areaName: 'East Patel Nagar',
      costForTwo: '₹400 for two',
      cuisines: ['Ice Cream', 'Ice Cream Cakes', 'Desserts', 'Beverages'],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: '425868',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4100,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4100,
      },
      parentId: '94570',
      avgRatingString: '4.4',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 13,
        lastMileTravel: 0.7,
        serviceability: 'SERVICEABLE',
        slaString: '13 mins',
        lastMileTravelString: '0.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-14 01:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/havmor-havfunn-ice-cream-karol-bagh-east-patel-nagar-delhi-425868',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '129858',
      name: "Nirula's",
      cloudinaryImageId: '2320ea078c38eabec536608f49454051',
      locality: 'Shankar Road',
      areaName: 'Rajinder Nagar',
      costForTwo: '₹500 for two',
      cuisines: ['Ice Cream', 'Desserts', 'Beverages'],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: '129858',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3600,
      },
      parentId: '1738',
      avgRatingString: '4.5',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.6,
        serviceability: 'SERVICEABLE',
        slaString: '15 mins',
        lastMileTravelString: '1.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-14 01:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/nirulas-shankar-road-rajinder-nagar-delhi-129858',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '336330',
      name: 'House of Chow',
      cloudinaryImageId: '6e97ac8f5c89213610309ef1940afa05',
      locality: 'East Patel Nagar',
      areaName: 'Karol Bagh',
      costForTwo: '₹300 for two',
      cuisines: ['Pan-Asian', 'Chinese', 'Thai', 'Oriental'],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '336330',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3600,
      },
      parentId: '9064',
      avgRatingString: '3.8',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.3,
        serviceability: 'SERVICEABLE',
        slaString: '20 mins',
        lastMileTravelString: '1.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-14 04:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/house-of-chow-east-patel-nagar-karol-bagh-delhi-336330',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '432786',
      name: 'Paratha Box - Desi Punjabi Meals',
      cloudinaryImageId: 'pbtcmvxlig98b8ml9dua',
      locality: 'PAYARA LAL ROAD',
      areaName: 'KAROL BAGH',
      costForTwo: '₹250 for two',
      cuisines: ['North Indian', 'Punjabi', 'Indian', 'Home Food', 'Beverages'],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '432786',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3600,
      },
      parentId: '306004',
      avgRatingString: '3.8',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.6,
        serviceability: 'SERVICEABLE',
        slaString: '19 mins',
        lastMileTravelString: '1.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-13 23:45:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹150 OFF',
        subHeader: 'ABOVE ₹399',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/paratha-box-desi-punjabi-meals-payara-lal-road-karol-bagh-delhi-432786',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '67382',
      name: 'Burgrill - The Win Win Burger',
      cloudinaryImageId: 'eavwixsqik7fi7p1habg',
      locality: 'Shankar Road',
      areaName: 'Rajinder Nagar',
      costForTwo: '₹250 for two',
      cuisines: [
        'Burgers',
        'Healthy Food',
        'American',
        'Salads',
        'Beverages',
        'Desserts',
        'Snacks',
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: '67382',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3600,
      },
      parentId: '302366',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.8,
        serviceability: 'SERVICEABLE',
        slaString: '18 mins',
        lastMileTravelString: '1.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-14 03:45:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-shankar-road-rajinder-nagar-delhi-67382',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '326429',
      name: 'Punjabi Angithi',
      cloudinaryImageId: 'lgfkquq3npd3r9oiy62b',
      locality: 'Satyawati Colony',
      areaName: 'Ashok vihar',
      costForTwo: '₹400 for two',
      cuisines: ['North Indian', 'Chinese', 'Punjabi', 'Snacks'],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: '326429',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 6000,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 6000,
      },
      parentId: '4464',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 6.4,
        serviceability: 'SERVICEABLE',
        slaString: '31 mins',
        lastMileTravelString: '6.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-13 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/punjabi-angithi-satyawati-colony-ashok-vihar-delhi-326429',
      type: 'WEBLINK',
    },
  },
];

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {resList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
