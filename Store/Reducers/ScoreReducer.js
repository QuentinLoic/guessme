const initialState = { histoScore: [] } 

function ScoreReducer(state = initialState, action) {
    let nextState

    switch(action.type) {
        case 'ADD_IN_HISTORIQUE' :
            nextState = {
                ...state,
                histoScore: [ ...state.histoScore, action.value ]
            }
            return nextState || state

        default:
            return state
    }
}

export default ScoreReducer