import * as types from 'constants/actions';

const initialState = {
  workflowsFetched: false,
  workflows: [],
  inactiveWorkflows: [],
};

export function workflows(state = initialState, action) {
  switch (action.type) {

    case types.WORKFLOWS_REQUESTED:
      return Object.assign({}, state, { workflowsFetched: false });

    case types.WORKFLOWS_RECEIVED:
      return Object.assign({}, state, {
        workflowsFetched: true,
        workflows: action.json.filter(w => w.active),
        inactiveWorkflows: action.json.filter(w => !w.active && !w.display_name.match(/Template/i)),
      });

    default:
      return state;
  }
}
