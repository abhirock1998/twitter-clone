import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Sidebaroption from "../Sidebaroption";
import SearchIcon from "@material-ui/icons/Search";

describe("<Sidebaroption/> ", () => {
  it("render the <Sidebaroption/> with dummy data", () => {
    const {container,getByTestId,queryByTestId} = render(
        <Sidebaroption Icon={SearchIcon} title="Test" />
    )
    

    expect(queryByTestId("sidebarOption")).toBeTruthy();
    fireEvent.click(getByTestId('sidebarOption'));
    expect(queryByTestId('sidebarOption')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
   
  });
});
