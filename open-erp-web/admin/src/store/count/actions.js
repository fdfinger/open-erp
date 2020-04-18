export const ADD = 'ADD'
export const DEL = 'DEL'
export const ADDLIST = 'ADDLIST'

export function addNumber(number) {
  return {
    type: ADD,
    number
  }
}

export const delNumber = (number) => {
  return {
    type: DEL,
    number
  }
}

export const addList = (list) => {
  return {
    type: ADDLIST,
    list
  }
}

