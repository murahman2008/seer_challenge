import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Bookings from "./components/bookings";
import BookingUpload from "./components/booking_upload";

class App extends Component {
  state = {
    shoppingCart: {},
    syncWithBackend: false
  };

  render() {
    return (
      <Switch>
        <Route path="/bookings/upload" exact component={BookingUpload} />
        <Route path="/bookings" component={Bookings} />
        <Route
          path="/"
          render={() => {
            return (
              <React.Fragment>
                <h1>Booking System</h1>
              </React.Fragment>
            );
          }}
        />

        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
