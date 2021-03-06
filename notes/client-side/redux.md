# Redux

Redux is a tool for managing client state.

## Store

A store is where the state is stored.

## Reducer

A reducer manages part of the state.

## Action Objects

Action objects describe how the state should change to a reducer.

### Action generators

Actions generators are an interface for producing consistent action objects.

### thunk

Thunk is a middleware for Redux. It allows action generators to return functions instead of action objects. The returned function is passed the dispatch function from the store, allowing an action generator to decide *when* or *if* to pass dispatch an action object.


## API

## dispatch

The dispatch function is responsible for taking action objects and passing
them to reducers, which results in an updated state.

### createStore

A function responsible for creating the whole state tree for the client.

#### reducer

A reducer is the first parameter of createStore. It returns the next state tree given the current state tree and an action object.

#### preloadedState

The preloaded state (if any) is the second argument to pass to createStore.

#### enhancer

The optional third parameter of createStore. It can be used to enhance the store with 3rd party capabilities, such as middleware, persistence, and time travel.