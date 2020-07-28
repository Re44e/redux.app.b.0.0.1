import { combineReducers } from 'redux';
import course from './course';

export default combineReducers({
  course,
});

/**
 * Exemplo para casos de múltiplos reducers
 * {
 *  course: { modules: [], activeLesson: {}, activeModule: {}},
 *  user: { name: '', avatar: ''...}
 * }
 */