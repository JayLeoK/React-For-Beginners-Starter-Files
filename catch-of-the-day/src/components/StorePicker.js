import React, { Fragment } from "react";
import { render } from "react-dom";

class StorePicker extends React.Component {
  render() {
    return (
      <Fragment>
        {/* only JS comments inserted when using JSX */}
        {/* also note the return is only one element (can be <> or <Fragment>)*/}
        <p>FISH!</p>
        <form className="store-selector">
          <h2>Please enter a store</h2>

          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store:</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
