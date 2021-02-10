import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Tweetbox from "../Tweetbox";
import SearchIcon from "@material-ui/icons/Search";

describe("<Tweetbox/> ", () => {
  it("render the <Tweetbox/> with dummy data", () => {
    const {container,getByTestId,queryByTestId} = render(
       <Tweetbox/>
    )
    

    expect(queryByTestId("tweetBox")).toBeTruthy();
    fireEvent.click(getByTestId('tweetBox'));
    expect(queryByTestId('tweetBox')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
   
  });
});
