export function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON', // Indica a ação que está sendo realizada e deve ser única no sistema.
    module,
    lesson
  }
};