import {
  MATERIALCATA_ON_SEARCH,
  MATERIALCATA_SEARCH_FROM_CHANGE,
  MATERIALCATA_UPDATE_TABLE_DATA,
  MATERIALCATA_OPEN_FORM_MODEL_TO_ADD,
  MATERIALCATA_OPEN_FROM_MODEL_TO_EDIT,
  MATERIALCATA_TABLE_ON_DELETE,
  MATERIALCATA_EDIT_FORM_ON_FINISH,
  MATERIALCATA_EDIT_FORM_ON_SUCCESS,
  MATERIALCATA_CLOSE_FORM_MODEL,
  MATERIALCATA_UPDATE_DELETE_ID,
  MATERIALCATA_GET_SELECT_DATA,
  MATERIALCATA_UPDATE_SELECT_DATA,
} from "../constant/materialCata";

const initQueryForm = {
  page: 1,
  pageSize: 20,
};

const initFormValues = {};

const initState = {
  isLoading: false,
  dataSource: [],
  count: 0,
  title: "添加物料分类",
  hasEdit: false,
  hasEditLoading: false,
  editInitValues: initFormValues,
  queryForm: initQueryForm,
  needDeleteId: 0,
  selectData: [],
};

export const materialCataReducer = (state = initState, action) => {
  switch (action.type) {
    case MATERIALCATA_SEARCH_FROM_CHANGE:
      return { ...state, queryForm: { ...initQueryForm, ...action.value } };
    case MATERIALCATA_UPDATE_TABLE_DATA:
      return {
        ...state,
        count: action.value.count || 0,
        dataSource: action.value.rows || [],
      };
    case MATERIALCATA_ON_SEARCH:
      return { ...state, queryForm: { ...state.queryForm, ...action.value } };
    case MATERIALCATA_OPEN_FORM_MODEL_TO_ADD:
      return {
        ...state,
        title: "添加物料分类",
        hasEdit: true,
        editInitValues: initFormValues,
      };
    case MATERIALCATA_OPEN_FROM_MODEL_TO_EDIT:
      return {
        ...state,
        title: "修改物料分类",
        hasEdit: true,
        editInitValues: action.value,
      };
    case MATERIALCATA_TABLE_ON_DELETE:
      return { ...state, needDeleteId: action.value };
    case MATERIALCATA_EDIT_FORM_ON_FINISH:
      return {
        ...state,
        editInitValues: { ...state.editInitValues, ...action.value },
      };
    case MATERIALCATA_EDIT_FORM_ON_SUCCESS:
      return { ...state };
    case MATERIALCATA_CLOSE_FORM_MODEL:
      return { ...state, hasEdit: false, editInitValues: initFormValues };
    case MATERIALCATA_UPDATE_DELETE_ID:
      return { ...state, needDeleteId: action.value };
    case MATERIALCATA_GET_SELECT_DATA:
      return { ...state };
    case MATERIALCATA_UPDATE_SELECT_DATA:
      return { ...state, selectData: action.value };
    default:
      return state;
  }
};
