import Listings from '../components/templates/Listings/ListingsTemplate';
import Profile from '../components/templates/Profile/ProfileTemplate';
import ExploreDestination from '../components/templates/ExploreDestination/ExploreDestinationTemplate';
import Universities from '../components/templates/Universities/UniversitiesTemplate';


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
            {
                path: '/my-listings/explore-destination/universities',
                component: Universities,
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