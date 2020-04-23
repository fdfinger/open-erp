import {
  PROCESS_CATA_ON_SEARCH,
  PROCESS_CATA_SEARCH_FROM_CHANGE,
  PROCESS_CATA_UPDATE_TABLE_DATA,
  PROCESS_CATA_OPEN_FORM_MODEL_TO_ADD,
  PROCESS_CATA_OPEN_FROM_MODEL_TO_EDIT,
  PROCESS_CATA_TABLE_ON_DELETE,
  PROCESS_CATA_EDIT_FORM_ON_FINISH,
  PROCESS_CATA_EDIT_FORM_ON_SUCCESS,
  PROCESS_CATA_CLOSE_FORM_MODEL,
  PROCESS_CATA_UPDATE_DELETE_ID,
  PROCESS_CATA_GET_SELECT_DATA,
  PROCESS_CATA_UPDATE_SELECT_DATA,
} from "../constant/processCata";

const initQueryForm = {
  page: 1,
  pageSize: 20,
};

const initFormValues = {};

const initState = {
  isLoading: false,
  dataSource: [],
  count: 0,
  title: "新增",
  hasEdit: false,
  hasEditLoading: false,
  editInitValues: initFormValues,
  queryForm: initQueryForm,
  needDeleteId: 0,
  selectData: [],
};

export const processCataReducer = (state = initState, action) => {
  console.log(action)
  switch (action.type) {
    case PROCESS_CATA_SEARCH_FROM_CHANGE:
      return { ...state, queryForm: { ...initQueryForm, ...action.value } };
    case PROCESS_CATA_UPDATE_TABLE_DATA:
      return {
        ...state,
        count: action.value.count || 0,
        dataSource: action.value.rows || [],
      };
    case PROCESS_CATA_ON_SEARCH:
      return { ...state, queryForm: { ...state.queryForm, ...action.value } };
    case PROCESS_CATA_OPEN_FORM_MODEL_TO_ADD:
      return {
        ...state,
        title: "新增",
        hasEdit: true,
        editInitValues: initFormValues,
      };
    case PROCESS_CATA_OPEN_FROM_MODEL_TO_EDIT:
      return {
        ...state,
        title: "修改",
        hasEdit: true,
        editInitValues: action.value,
      };
    case PROCESS_CATA_TABLE_ON_DELETE:
      return { ...state, needDeleteId: action.value };
    case PROCESS_CATA_EDIT_FORM_ON_FINISH:
      return {
        ...state,
        editInitValues: { ...state.editInitValues, ...action.value },
      };
    case PROCESS_CATA_EDIT_FORM_ON_SUCCESS:
      return { ...state };
    case PROCESS_CATA_CLOSE_FORM_MODEL:
      return { ...state, hasEdit: false, editInitValues: initFormValues };
    case PROCESS_CATA_UPDATE_DELETE_ID:
      return { ...state, needDeleteId: action.value };
    case PROCESS_CATA_GET_SELECT_DATA:
      return { ...state };
    case PROCESS_CATA_UPDATE_SELECT_DATA:
      return { ...state, selectData: action.value };
    default:
      return state;
  }
};
