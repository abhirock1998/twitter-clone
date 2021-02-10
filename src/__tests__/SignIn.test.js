import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import SignIn from '../SignIn';;


describe("<SignIn/> ", () => {
  it("render the <SignIn/> with dummy data", () => {
    const {container,getByTestId,queryByTestId} = render(
       <SignIn/>
    )
    

    expect(queryByTestId("signin")).toBeTruthy();
    fireEvent.click(getByTestId('signin'));
    expect(queryByTestId('signin')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
   
  });
});
