import * as React from 'react';

export type TReducerMiddleware<S = any, A = any> = (
	state: S,
	reducer: React.Reducer<S, A>,
) => (dispatch: React.Dispatch<A>) => (action: A) => void;

export function useEnhancedReducer<S, A>(
	reducer: React.Reducer<S, A>,
	initalState: S,
	middlewares: TReducerMiddleware[] = [],
): [S, React.Dispatch<A>] {
	const [state, dispatch] = React.useReducer(reducer, initalState);

	if (!Array.isArray(middlewares) || middlewares.length === 0) {
		return [state, dispatch];
	}

	const chain = middlewares.map(middleware => middleware(state, reducer));
	const enhancedDispatch = compose(...chain)(dispatch);

	return [state, enhancedDispatch];
}

export const loggerMiddleware: TReducerMiddleware = (state, reducer) => dispatch => action => {
	console.info('%cPrevious State:', 'color: #9E9E9E; font-weight: 700;', state);
	console.info('%cAction:', 'color: #00A7F7; font-weight: 700;', action);
	console.log('%cNext State:', 'color: #47B04B; font-weight: 700;', reducer(state, action));

	dispatch(action);
};

export const thunkMiddleware: TReducerMiddleware = state => dispatch => action => {
	if (typeof action === 'function') {
		action(dispatch, state);
		return;
	}

	dispatch(action);
};

const compose = <V>(...fns: Array<(value: V) => V>) => (value: V) => fns.reduceRight((prevValue, fn) => fn(prevValue), value);
