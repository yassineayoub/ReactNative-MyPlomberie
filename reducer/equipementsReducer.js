import {
  SET_SELECTED_EQUIP,
  ADD_SELECTED_EQUIP,
  RESET_SELECTED_EQUIP,
  SET_PLUS_MINUS,
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
      if (state.equip.find((eq) => eq.name === checkedEquipement)) {
        newEquipsList = state.equip.filter(
          (eq) => eq.name !== checkedEquipement,
        );
      } else {
        newEquipsList = [...state.equip, { name: checkedEquipement, count: 1 }];
      }
      return {
        ...state,
        equip: newEquipsList,
      };
    case RESET_SELECTED_EQUIP:
      return {
        ...initialState,
      };
    case SET_PLUS_MINUS:
      const { plusOrMinus, equipement } = action.payload;
      let updatedEquipList = [...state.equip];
      const indexEquipToUpdate = updatedEquipList.findIndex(
        (eq) => eq.name === equipement,
      );

      if (plusOrMinus === 'plus') {
        updatedEquipList[indexEquipToUpdate].count += 1;
      } else if (plusOrMinus === 'minus') {
        updatedEquipList[indexEquipToUpdate].count -= 1;
        if (updatedEquipList[indexEquipToUpdate].count < 1) {
          updatedEquipList = updatedEquipList.filter((eq) => eq.name !== equipement)
        }
      }
      return {
        ...state,
        equip: updatedEquipList,
      };
    default:
      return state;
  }
};

export default equipementsReducer;
