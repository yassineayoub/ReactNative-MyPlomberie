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

export const SET_PLUS_MINUS = 'SET_PLUS_MINUS';
/**
 * 
 * @param {String} equipement equipement name to update
 * @param {String} PlusOrMinus 'plus' or 'minus'
 * @returns void
 */
export const setPlusMinus = (equipement, plusOrMinus) => ({
  type: SET_PLUS_MINUS,
  payload: {
    plusOrMinus,
    equipement,
  },
});

export const REMOVE_EQUIP = 'REMOVE_EQUIP';
export const removeEquip = (equipement) => ({
  type: REMOVE_EQUIP,
  payload: equipement,
});
