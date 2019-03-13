
// Reducer
let initialState = {
    test: 'test'
}


export const testAction = params  => (dispatch, getState) => {
    console.log('testAction')
    dispatch({
        type: 'TESTACTION',
        payload: params,
    })
}

function reducer (state = initialState, { type, payload }) {

  switch (type) {
    case 'TESTACTION':
        console.log('reducer', type, payload)
        return { ...state, test: payload }
    default:
        return state
  }
}

export default reducer
