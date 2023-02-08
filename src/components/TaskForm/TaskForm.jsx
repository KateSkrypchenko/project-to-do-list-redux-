import { useDispatch } from 'react-redux';

import { Button } from 'components/Button/Button';
import { addTask } from 'redux/tasksSlice';

import { FormStyled, InputStyled } from './TaskForm.styled';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </FormStyled>
  );
};
