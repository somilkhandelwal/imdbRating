import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import apiReducer from './reducer/apiReducer';



// const root=combineReducers({
//    apiReducer
// })
const appReducer = combineReducers({
    /* your app’s top-level reducers */
   apiReducer

  })
  
  const root = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined
    }
    return appReducer(state, action)
  }
const logger= store=>{
    return (next)=>{
        return action =>{
            console.log("{Middle Ware } Dispatching ",action)
            const result =next(action);
            console.log("NextState",store.getState())
            return result
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(root,composeEnhancers(applyMiddleware(logger,thunk)));
export default store;