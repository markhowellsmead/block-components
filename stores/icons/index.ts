/**
 * WordPress dependencies
 */
import { createReduxStore, register } from '@wordpress/data';

/**
 * Internal dependencies
 */
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';

const STORE_NAME = 'tenup/icons';

export const store = createReduxStore(STORE_NAME, {
	reducer,
	selectors,
	actions,
});

register(store);
