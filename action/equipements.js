export const SET_SELECTED_EQUIP = 'SET_SELECTED_EQUIP';
export const setSelectedEquip = (equipement) => ({
  type: SET_SELECTED_EQUIP,
  payload: equipement,
});

export const ADD_SELECTED_EQUIP = 'ADD_SELECTED_EQUIP';
export const addSelectedEquip = () => ({
  type: ADD_SELECTED_EQUIP,
});
