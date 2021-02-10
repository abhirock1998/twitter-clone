import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import SignUp from '../SignUp';


describe("<SignUp/> ", () => {
  it("render the <SignUp/> with dummy data", () => {
    const {container,getByTestId,queryByTestId} = render(
       <SignUp/>
    )
    

    expect(queryByTestId("signup")).toBeTruthy();
    fireEvent.click(getByTestId('signup'));
    expect(queryByTestId('signup')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
   
  });
});
