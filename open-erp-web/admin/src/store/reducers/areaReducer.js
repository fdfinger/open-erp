import {
  AREA_SEARCH_FROM_CHANGE,
  AREA_OPEN_FORM_MODEL_TO_ADD,
  AREA_OPEN_FROM_MODEL_TO_EDIT,
  AREA_TABLE_ON_DELETE,
  AREA_EDIT_FORM_ON_FINISH,
  AREA_CLOSE_FORM_MODEL,
  AREA_UPDATE_DELETE_ID,
  AREA_UPDATE_TABLE,
  AREA_SEARCH_CLICK,
  AREA_UPDATE_SELECT_DATA
} from "../constant/area";

// 初始表单
const initFormValues = {
  areaCode: "",
  parentAreaCode: "",
  areaStatus: 0,
};

const initSearchValues = {
  page: 1,
  pageSize: 20,
};

// 初始状态
const initState = {
  dataSource: [],
  title: "新增",
  hasEdit: false,
  hasEditLoading: false,
  editInitValues: initFormValues,
  searchForm: initSearchValues,
  needDeleteId: 0,
  count: 0,
  selectData: []
};

export const areaReducer = (state = initState, action) => {
  switch (action.type) {
    // 更新表格
    case AREA_UPDATE_TABLE:
      return { ...state, dataSource: action.value.rows || [], count: action.value.count || 0 };
    // 查询数据的变化
    case AREA_SEARCH_CLICK:
      return { ...state, searchForm: { ...state.searchForm, ...action.value }  }
    case AREA_SEARCH_FROM_CHANGE:
      return { ...state, searchForm: { ...initSearchValues, ...action.value } };
    // 打开新增 modal
    case AREA_OPEN_FORM_MODEL_TO_ADD:
      return {
        ...state,
        title: "新增",
        hasEdit: true,
        editInitValues: initFormValues,
      };
    // 打开编辑 modal
    case AREA_OPEN_FROM_MODEL_TO_EDIT:
      return {
        ...state,
        title: "修改",
        hasEdit: true,
        editInitValues: action.value,
      };
    // 表格删除操作 异步
    case AREA_TABLE_ON_DELETE:
      return { ...state, needDeleteId: action.value };
    // 表单提交完成操作 异步
    case AREA_EDIT_FORM_ON_FINISH:
      return {
        ...state,
        editInitValues: { ...state.editInitValues, ...action.value },
      };
    // 表单关闭 关闭窗口 清空表单数据
    case AREA_CLOSE_FORM_MODEL:
      return { ...state, hasEdit: false, editInitValues: initFormValues };
    case AREA_UPDATE_DELETE_ID:
      return { ...state, needDeleteId: action.value };
    case AREA_UPDATE_SELECT_DATA:
      return { ...state, selectData: action.value }
    default:
      break;
  }
  return state;
};
