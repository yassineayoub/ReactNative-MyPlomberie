import { SET_SELECTED_MAT } from '../action/materials';

const initialState = {
  selectedMaterial: null,
};

const materialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_MAT:
      return {
        ...state,
        selectedMaterial: action.payload,
      };
    default:
      return state;
  }
};

export default materialsReducer;
