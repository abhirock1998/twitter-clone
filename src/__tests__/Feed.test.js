import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Fedd from '../Feed';


describe("<Feed/> ", () => {
  it("render the <Feed/> with dummy data", () => {
    const {container,getByTestId,queryByTestId} = render(
       <Feed/>
    )
    

    expect(queryByTestId("feed")).toBeTruthy();
    fireEvent.click(getByTestId('feed'));
    expect(queryByTestId('feed')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
   
  });
});
