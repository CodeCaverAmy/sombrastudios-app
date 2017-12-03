import * as ItemActionTypes from '../actiontypes/itme';

const initialState = [
  {
    id: 3
  }
];

export default function Item(state=initialState, action) {
  switch(action.type) {
    case: ItemActionTypes.ADD_ITEM:
      return [
        ...state
        {
          id: action.id
        }
    ];
    case: ItemActionTypes.REMOVE_ITEM:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index +1)
        {
          id: action.id
        }
      ];
    case: ItemActionTypes.UPDATE_ITEM_COUNT:
      return state.map((item, index) => {
        if(index === action.index) {
          return {
            ...item,
            count: item.count + action.count
          };
        }
        return item;
      });

    default:
      return state;
  }
}
