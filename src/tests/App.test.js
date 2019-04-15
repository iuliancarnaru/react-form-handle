import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import App from "../components/App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App /> component", () => {
  it("should render succesfuly", () => {
    const wrapper = shallow(<App />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
