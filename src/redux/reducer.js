import { UPDATE_RUNS, UPDATE_BALLING_CARDS, UPDATE_FILTERED_BATTING_CARDS, UPDATE_SHOT_TIMINGS, TARGET, OVERS, WICKETS, BALLS } from './action'

const initialState = {
  runs: 0,
  wickets: 0,
  target: 0,
  overs: 0,
  balls: 0,
  ballingCards: [],
  filteredBattingCards: [],
  shotTimings: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RUNS:
      return {
        ...state,
        runs: action.payload
      }
    case UPDATE_BALLING_CARDS:
      return {
        ...state,
        ballingCards: action.payload
      }
    case UPDATE_FILTERED_BATTING_CARDS:
      return {
        ...state,
        filteredBattingCards: action.payload
      }
    case UPDATE_SHOT_TIMINGS:
      return {
        ...state,
        shotTimings: action.payload
      }
    case TARGET:
      return {
        ...state,
        target: action.payload
      }
    case OVERS:
      return {
        ...state,
        overs: action.payload
      }
    case WICKETS:
      return {
        ...state,
        wickets: action.payload
      }
    case BALLS:
      return {
        ...state,
        balls: action.payload
      }
    default:
      return state
  }
}

export default reducer
