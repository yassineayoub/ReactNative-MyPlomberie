const { SET_SELECTED_EQUIP } = require('../action/equipements');

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
    default:
      return state;
  }
};

export default equipementsReducer;
