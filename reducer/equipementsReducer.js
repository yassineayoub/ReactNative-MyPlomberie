const {
  SET_SELECTED_EQUIP,
  ADD_SELECTED_EQUIP,
} = require('../action/equipements');

const initialState = {
  equip: [],
  selectedEquipement: null,
};

const equipementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_EQUIP:
      return {
        ...state,
        selectedEquipement: action.payload,
      };
    case ADD_SELECTED_EQUIP:
      return {
        ...state,
        equip: [...state.equip, state.selectedEquipement],
      };
    default:
      return state;
  }
};

export default equipementsReducer;
