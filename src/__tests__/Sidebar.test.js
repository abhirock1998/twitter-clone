import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Sidebar from '../Sidebar';;


describe("<Sidebar/> ", () => {
  it("render the <Sidebar/> with dummy data", () => {
    const {container,getByTestId,queryByTestId} = render(
       <Sidebar/>
    )
    

    expect(queryByTestId("sidebar")).toBeTruthy();
    fireEvent.click(getByTestId('sidebar'));
    expect(queryByTestId('sidebar')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
   
  });
});
