import React from 'react';

// Padrão do React para compartilhar informações entre os componentes.
import { connect } from 'react-redux';
import * as CourseActions from '../../store/actions/course';
import { bindActionCreators } from 'redux'; // Mapeia as Actions em forma de propriedade.

const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title} 
              <button onClick={() => toggleLesson(module,lesson)}>Selecionar</button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = state => ({
  modules: state.course.modules
});

const mapDispatchToProps = dispatch => ({
  toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module,lesson))
  /**
   * Uma alternativa de mapear actions declaradas com a mesma nomenclatura de funções do componente:
   * bindActionCreators(CourseActions, dispatch);
   */
  
});

// Sugestão simples de implementação:
// <button onClick={() => dispatch(CourseActions.toggleLesson(module,lesson))}
// export default connect(state => ({ modules: state.course.modules }))(Sidebar);
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);