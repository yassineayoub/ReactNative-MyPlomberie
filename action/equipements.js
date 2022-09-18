export const SET_SELECTED_EQUIP = 'SET_SELECTED_EQUIP';
export const setSelectedEquip = (equipement) => ({
  type: SET_SELECTED_EQUIP,
  payload: equipement,
});

export const ADD_SELECTED_EQUIP = 'ADD_SELECTED_EQUIP';
export const addSelectedEquip = (equipement) => ({
  type: ADD_SELECTED_EQUIP,
  payload: equipement,
});

export const RESET_SELECTED_EQUIP = 'RESET_SELECTED_EQUIP';
export const resetSelectedEquip = () => ({
  type: RESET_SELECTED_EQUIP,
});
