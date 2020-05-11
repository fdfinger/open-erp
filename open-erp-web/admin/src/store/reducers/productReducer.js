import {
  PRODUCT_ON_SEARCH,
  PRODUCT_SEARCH_FROM_CHANGE,
  PRODUCT_UPDATE_TABLE_DATA,
  PRODUCT_OPEN_FORM_MODEL_TO_ADD,
  PRODUCT_OPEN_FROM_MODEL_TO_EDIT,
  PRODUCT_TABLE_ON_DELETE,
  PRODUCT_EDIT_FORM_ON_FINISH,
  PRODUCT_EDIT_FORM_ON_SUCCESS,
  PRODUCT_CLOSE_FORM_MODEL,
  PRODUCT_UPDATE_DELETE_ID,
  PRODUCT_GET_SELECT_DATA,
  PRODUCT_UPDATE_SELECT_DATA,
} from "../constant/product";

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

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case PRODUCT_SEARCH_FROM_CHANGE:
      return { ...state, queryForm: { ...initQueryForm, ...action.value } };
    case PRODUCT_UPDATE_TABLE_DATA:
      return {
        ...state,
        count: action.value.count || 0,
        dataSource: action.value.rows || [],
      };
    case PRODUCT_ON_SEARCH:
      return { ...state, queryForm: { ...state.queryForm, ...action.value } };
    case PRODUCT_OPEN_FORM_MODEL_TO_ADD:
      return {
        ...state,
        title: "新增BOM",
        hasEdit: true,
        editInitValues: initFormValues,
      };
    case PRODUCT_OPEN_FROM_MODEL_TO_EDIT:
      return {
        ...state,
        title: "修改BOM",
        hasEdit: true,
        editInitValues: action.value,
      };
    case PRODUCT_TABLE_ON_DELETE:
      return { ...state, needDeleteId: action.value };
    case PRODUCT_EDIT_FORM_ON_FINISH:
      return {
        ...state,
        editInitValues: { ...state.editInitValues, ...action.value },
      };
    case PRODUCT_EDIT_FORM_ON_SUCCESS:
      return { ...state };
    case PRODUCT_CLOSE_FORM_MODEL:
      return { ...state, hasEdit: false, editInitValues: initFormValues };
    case PRODUCT_UPDATE_DELETE_ID:
      return { ...state, needDeleteId: action.value };
    case PRODUCT_GET_SELECT_DATA:
      return { ...state };
    case PRODUCT_UPDATE_SELECT_DATA:
      return { ...state, selectData: action.value };
    default:
      return state;
  }
};
