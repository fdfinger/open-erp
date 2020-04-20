import {
  AREA_SEARCH_CLICK,
  AREA_SEARCH_FROM_CHANGE,
  AREA_OPEN_FORM_MODEL_TO_ADD,
  AREA_OPEN_FROM_MODEL_TO_EDIT,
  AREA_TABLE_ON_DELETE,
  AREA_EDIT_FORM_ON_FINISH,
  AREA_CLOSE_FORM_MODEL
} from '../constant/area'

export const openAddFormModal = function() {
  return {
    type: AREA_OPEN_FORM_MODEL_TO_ADD
  }
}

export const EditFormFinish = (value) => {
  return {
    type: AREA_EDIT_FORM_ON_FINISH,
    value
  }
}


export const closeFormModel = () => {
  return {
    type: AREA_CLOSE_FORM_MODEL
  }
}
