import React from "react";
import Enzyme from "enzyme";
import { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Signin from '../client/src/components/SignIN/Signin.js'

Enzyme.configure({adapter: new Adapter() });

describe("<Signin />", () => {
    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState")
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
         wrapper = shallow(<Login/>)
    });
});
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe("Email input", () => {
        it("Should capture email correctly onChange", () => {
            const email = wrapper.find("input").at(0);
            email.instance().value = "Test";
            email.simulate("change");
            expect(setState).toHaveBeenCalledWith("Test");
        });
    });

    describe("Password input", () => {
        it("Should capture password correctly onChange", () => {
            const password = wrapper.find("input").at(1);
            password.instance().value = "Testing";
            password.simulate("change");
            expect(setState).toHaveBeenCalledWith("Testing");
        });
    });