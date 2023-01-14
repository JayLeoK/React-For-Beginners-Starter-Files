import React, { Fragment } from "react";
import { render } from "react-dom";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  //property that defines the ref on the page
  myInput = React.createRef();
  //property that is set to arrow function
  goToStore = (event) => {
    //stop the form from submitting
    event.preventDefault();

    //get text from input
    const storeName = this.myInput.current.value;
    console.log(storeName);

    //change page to /store/whatever
    //use react router to keep up the memory of the pages
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <Fragment>
        {/* only JS comments inserted when using JSX */}
        {/* also note the return is only one element (can be <> or <Fragment>)*/}
        <p>FISH!</p>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store:</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
