import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actionsof type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
    expect(commentsReducer([], {})).toEqual([]);
})