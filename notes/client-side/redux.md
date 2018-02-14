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


## API

### createStore

A function responsible for creating the whole state tree for the client.

#### reducer

A reducer is the first parameter of createStore. It returns the next state tree given the current state tree and an action object.

#### preloadedState

The preloaded state (if any) is the second argument to pass to createStore.

#### enhancer

The optional third parameter of createStore. It can be used to enhance the store with 3rd party capabilities, such as middleware, persistence, and time travel.