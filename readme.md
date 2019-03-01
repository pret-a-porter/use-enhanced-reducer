# use-enhanced-reducer [![npm version](https://img.shields.io/npm/v/use-enhanced-reducer.svg?style=flat)](https://www.npmjs.com/package/use-enhanced-reducer)

Simple custom hook for use React.useReducer with middlewares.

# Example

```ts
import * as React from 'react';
import { useEnhancedReducer, loggerMiddleware } from 'use-enhanced-reducer';

const SomeComponent: React.FunctionComponent<{}> = () => {
	// see logs of actions in console
	const [state, dispatch] = useEnhancedReducer(reducer, initialState, [loggerMiddleware])

	// do something
}
```
