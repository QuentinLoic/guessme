
const initialState = { histScore: [] }

function historique(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'HISTORIQUE':
            nextState = {
                ...state,
                histScore: [...state.histScore, action.value]
            }
            return nextState || state
        default:
            return state
    } 
}

export default historique