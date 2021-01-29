import Listings from '../components/templates/Listings/ListingsTemplate';
import Profile from '../components/templates/Profile/ProfileTemplate';
import ExploreDestination from '../components/templates/ExploreDestination/ExploreDestinationTemplate';


let routes = [
    {
        elements: [
            {
                path: '/my-listings',
                component: Listings,
            },
            {
                path: '/my-listings/explore-destination',
                component: ExploreDestination,
            },
        ],
    },
    {
        elements: [
            {
                path: '/profile',
                component: Profile,
            },
        ],
    }
];
export default routes;