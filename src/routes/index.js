import React from 'react';
import PrivateRoute from '../config/PrivateRoute';
import routes from './Routes';

let index = () =>
    routes.map(
        (route) =>
            route.elements &&
            route.elements.map((route, i) =>
                 (
                    <PrivateRoute
                        key={i}
                        exact
                        path={route.path}
                        component={route.component}
                        moduleID={route.componentID}
                    />
                )
            )
    );

    export default index;