import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as types from 'constants/actions';

function projectPreferencesRequested() {
  return { type: types.PROJECT_PREFERENCES_REQUESTED };
}

function projectPreferencesReceived(json) {
  return { type: types.PROJECT_PREFERENCES_RECEIVED, json };
}

export function fetchProjectPreferences(userId) {
  return dispatch => {
    dispatch(projectPreferencesRequested());
    apiClient.type('project_preferences').get({ project_id: config.projectId, user_id: userId })
      .then(json => dispatch(projectPreferencesReceived(json)));
  };
}