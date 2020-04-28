import React from 'react';
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = (props) => {

    const shouldNavigateAway = () => {
        if (!localStorage.getItem("token")) {
            return true;
        }
    }

    return (
        <Route
            history={props.history}
            location={props.location}
            match={props.match}
            render={({location}) =>
                shouldNavigateAway() ? (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: {from: location}
                        }}
                    />
                ) : (
                    props.component
                )
            }
        />
    );
}

export default ProtectedRoute;