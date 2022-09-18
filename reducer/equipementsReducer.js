import {
  SET_SELECTED_EQUIP,
  ADD_SELECTED_EQUIP,
  RESET_SELECTED_EQUIP,
} from '../action/equipements';

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
      const checkedEquipement = action.payload;
      let newEquipsList = [];
      if (state.equip.includes(checkedEquipement)) {
        newEquipsList = state.equip.filter((eq) => eq !== checkedEquipement);
      } else {
        newEquipsList = [...state.equip, checkedEquipement];
      }
      return {
        ...state,
        equip: newEquipsList,
      };
    case RESET_SELECTED_EQUIP:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default equipementsReducer;
