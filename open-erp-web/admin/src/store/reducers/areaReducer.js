import {
  AREA_SEARCH_CLICK,
  AREA_SEARCH_FROM_CHANGE,
  AREA_OPEN_FORM_MODEL_TO_ADD,
  AREA_OPEN_FROM_MODEL_TO_EDIT,
  AREA_TABLE_ON_DELETE,
  AREA_EDIT_FORM_ON_FINISH,
  AREA_CLOSE_FORM_MODEL,
} from "../constant/area";

// 初始表单
const initFormValues = {
  areaCode: "",
  parentAreaCode: "",
  areaStatus: 0,
};

// 初始状态
const initState = {
  dataSource: [],
  title: "新增",
  hasEdit: false,
  hasEditLoading: false,
  editInitValues: {},
  searchForm: initFormValues,
};

export const areaReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    // 查询 异步
    case AREA_SEARCH_CLICK:
      return Object.assign({}, state, action.value);
    // 查询数据的变化
    case AREA_SEARCH_FROM_CHANGE: 
      return Object.assign({}, state, action.value);
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
      return Object.assign({}, state, action.value);
    // 表格删除操作 异步
    case AREA_TABLE_ON_DELETE:
      return Object.assign({}, state, action.value);
    // 表单提交完成操作 异步
    case AREA_EDIT_FORM_ON_FINISH:
      return Object.assign({}, state, action.value);
    // 表单关闭 关闭窗口 清空表单数据
    case AREA_CLOSE_FORM_MODEL:
      return Object.assign({}, state, {
        hasEdit: false,
        editInitValues: initFormValues,
      });
    default:
      break;
  }
  return state;
};
