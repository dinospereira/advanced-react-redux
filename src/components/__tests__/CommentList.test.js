import React from 'react';
import { mount } from 'enzyme';

import CommentList from '../CommentList';
import Root from '../../utils/RootTest';

describe("CommentList Component", () => {
    let component;

    beforeEach(() => {
        const initialState = {
            comments: ['Comment1', 'Comment2'],
        };

        component = mount(
            <Root initialState={initialState}>
                <CommentList />
            </Root>);
    });

    afterEach(() => {
        component.unmount();
    });

    it('creates one li per comment', () => {
        expect(component.find('li').length).toEqual(2);
    });

    it('should show text for each comment', () => {
        const expected = component.find('li').map((li) => li.text());

        expect(expected).toEqual(['Comment1', 'Comment2']);

        expect(component.render().text()).toContain('Comment1');
        expect(component.render().text()).toContain('Comment2');
    });
});