import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';
import Root from '../../utils/RootTest';

describe("CommentBox Component", () => {
    let component;

    beforeEach(() => {
        component = mount(
        <Root>
            <CommentBox />
        </Root>);
    });

    afterEach(() => {
        component.unmount();
    });
    
    it("should show a textarea", () => {
        expect(component.find('textarea').length).toEqual(1);
    });

    it("should show 2 buttons", () => {
        expect(component.find('button').length).toEqual(2);
    });

    describe("Testing interaction", () => {
        beforeEach(() => {
            component.find('textarea')
                .simulate('change', { target: { value: 'new comment' } });
            component.update();
        });

        it("has a text area where we can write in", () => {
            expect(component.find('textarea').prop('value')).toEqual('new comment');
        });
    
        it("clears input field after submitting form", () => {
            expect(component.find('textarea').prop('value')).toEqual('new comment');
    
            component.find('form')
                .simulate('submit');
            component.update();
    
            expect(component.find('textarea').prop('value')).toEqual('');
        });
    });
});