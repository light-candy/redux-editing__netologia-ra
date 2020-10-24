import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE } from '../actions/actionTypes';

const initialState = [
    { id: nanoid(), name: "Замена стекла", price: 21000 },
    { id: nanoid(), name: "Замена батареи", price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
    switch(action.type){
      case ADD_SERVICE:
        const { id, service, price } = action.payload;
        if (state.find((o) => o.id === id)){
          return [ ...state.map((o) =>
             (o.id !== id) ? o : {...o, name: service, price: Number(price)})];
        }
        else {
          return [ ...state, { id, name: service, price: Number(price)}];
        }
      case REMOVE_SERVICE:
        return state.filter((service) => service.id !== action.payload.id);
      default:
        return state;
    }
};
