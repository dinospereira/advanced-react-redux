import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import RootTest from '../utils/RootTest';
import App from '../components/App';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'fetched1' }, { name: 'fetched2' }],
    })
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    const mainComponent = mount(
        <RootTest>
            <App />
        </RootTest>
    );
    
    mainComponent
        .find('.fetch-comments')
        .simulate('click')
        
        
    moxios.wait(() => {
        mainComponent.update();
        expect(mainComponent.find('li').length).toEqual(2);
        done();
        mainComponent.unmount();
    });
});