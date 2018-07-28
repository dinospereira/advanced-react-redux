import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';



describe("App Component", () => {
    let component;

    beforeEach(() => {
        component = shallow(<App />);
    });
    
    it("shows a comment box", () => {
        expect(component.find(CommentBox).length).toEqual(1);
    });

    it("shows a comment list", () => {
        expect(component.find(CommentList).length).toEqual(1);
    })
});