# use-enhanced-reducer

[![npm version](https://badgen.net/npm/v/use-enhanced-reducer?icon=npm)](https://www.npmjs.com/package/use-enhanced-reducer)
[![npm downloads](https://badgen.net/npm/dt/use-enhanced-reducer?icon=libraries&color=green)](https://www.npmjs.com/package/use-enhanced-reducer)
[![bundle size](https://badgen.net/bundlephobia/minzip/use-enhanced-reducer@latest?icon=awesome)](https://bundlephobia.com/result?p=use-enhanced-reducer@latest)

Simple custom hook for use React.useReducer with middlewares.

# Examples

### With logger middleware

```ts
import * as React from 'react';
import { useEnhancedReducer, loggerMiddleware } from 'use-enhanced-reducer';

const SomeComponent: React.FunctionComponent<{}> = () => {
	// see logs of actions in console
	const [state, dispatch] = useEnhancedReducer(reducer, initialState, [loggerMiddleware])

	// do something
}
```

### With your custom middleware

```ts
import * as React from 'react';
import { useEnhancedReducer, TReducerMiddleware } from 'use-enhanced-reducer';

const customMiddleware: TReducerMiddleware = state => dispatch => action => {
	// do something
};

const SomeComponent: React.FunctionComponent<{}> = () => {
	const [state, dispatch] = useEnhancedReducer(reducer, initialState, [customMiddleware])

	// do something
}
```

