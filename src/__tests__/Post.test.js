import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Post from '../Post';


describe("<Post/> ", () => {
  it("render the <Post/> with dummy data", () => {
    const {container,getByTestId,queryByTestId} = render(
       <Post/>
    )
    

    expect(queryByTestId("post")).toBeTruthy();
    fireEvent.click(getByTestId('post'));
    expect(queryByTestId('post')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
   
  });
});
