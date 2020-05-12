import {
  DEVICE_ON_SEARCH,
  DEVICE_SEARCH_FROM_CHANGE,
  DEVICE_UPDATE_TABLE_DATA,
  DEVICE_OPEN_FORM_MODEL_TO_ADD,
  DEVICE_OPEN_FROM_MODEL_TO_EDIT,
  DEVICE_TABLE_ON_DELETE,
  DEVICE_EDIT_FORM_ON_FINISH,
  DEVICE_EDIT_FORM_ON_SUCCESS,
  DEVICE_CLOSE_FORM_MODEL,
  DEVICE_UPDATE_DELETE_ID,
  DEVICE_GET_SELECT_DATA,
  DEVICE_UPDATE_SELECT_DATA,
} from "../constant/device";
import moment from 'moment'

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

export const deviceReducer = (state = initState, action) => {
  switch (action.type) {
    case DEVICE_SEARCH_FROM_CHANGE:
      return { ...state, queryForm: { ...initQueryForm, ...action.value } };
    case DEVICE_UPDATE_TABLE_DATA:
      return {
        ...state,
        count: action.value.count || 0,
        isLoading: false,
        dataSource: action.value.rows || [],
      };
    case DEVICE_ON_SEARCH:
      return { ...state, queryForm: { ...state.queryForm, ...action.value }, isLoading: true };
    case DEVICE_OPEN_FORM_MODEL_TO_ADD:
      return {
        ...state,
        title: "新增车间机器设备",
        hasEdit: true,
        editInitValues: initFormValues,
      };
    case DEVICE_OPEN_FROM_MODEL_TO_EDIT:
      return {
        ...state,
        title: "修改车间机器设备",
        hasEdit: true,
        editInitValues: {...action.value,buyDate: moment(action.value.buyDate, 'YYYY-MM-DD')},
      };
    case DEVICE_TABLE_ON_DELETE:
      return { ...state, needDeleteId: action.value };
    case DEVICE_EDIT_FORM_ON_FINISH:
      return {
        ...state,
        editInitValues: { ...state.editInitValues, ...action.value },
      };
    case DEVICE_EDIT_FORM_ON_SUCCESS:
      return { ...state };
    case DEVICE_CLOSE_FORM_MODEL:
      return { ...state, hasEdit: false, editInitValues: initFormValues };
    case DEVICE_UPDATE_DELETE_ID:
      return { ...state, needDeleteId: action.value };
    case DEVICE_GET_SELECT_DATA:
      return { ...state };
    case DEVICE_UPDATE_SELECT_DATA:
      return { ...state, selectData: action.value };
    default:
      return state;
  }
};
