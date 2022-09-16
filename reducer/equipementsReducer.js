const { SET_SELECTED } = require('../action/equipements');

const initialState = {
  equip: [],
  selectedEquipement: null,
};

const equipementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED:
      return {
        ...state,
        selectedEquipement: action.payload,
      };
    default:
      return state;
  }
};

export default equipementsReducer;
