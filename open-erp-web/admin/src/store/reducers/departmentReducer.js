import {
  DEPARTMENT_LIST_ON_CHANGE,
  DEPARTMENT_SELECTED_ID,
  DEPARTMENT_ON_LOAD_DATA,
  DEPARTMENT_UPDATE_FORM
} from "../constant/department";

const initForm = {
  id: "",
  name: "",
  parent_id: "",
  level: "",
  seq: "",
  remark: "",
  operator: "",
};

const initState = {
  list: [],
  detail: {},
  selectData: [],
  selectedId: 0,
  formData: initForm,
  loadData: {}
};

export const departmentReducer = (state = initState, action) => {
  switch (action.type) {
    case DEPARTMENT_LIST_ON_CHANGE:
      return {...state, list: action.value.map(item => ({...item,key:item.id, title: item.name})) || []};
    case DEPARTMENT_SELECTED_ID:
      return { ...state, selectedId: action.value };
    case DEPARTMENT_UPDATE_FORM:
      return { ...state, formData: action.value };
    case DEPARTMENT_ON_LOAD_DATA:
      return { ...state, loadData: action.value };
    default:
      return state;
  }
};
