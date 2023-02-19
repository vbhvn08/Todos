import { Todo } from '@/types/types';

const CompletedTodos = ({ completedTodos }: Props) => {
  return (
    <div className="mb-5">
      <h2 className="text-center">I did it!</h2>
      <div className="completed-todos-card p-5 row">
        {completedTodos.map((todo: Todo) => (
          <div
            key={todo.id}
            className="col-sm-12 col-md-3 ms-md-4 mb-4 card p-3 bg-white"
          >
            {todo.todo}
          </div>
        ))}
      </div>
    </div>
  );
};

type Props = {
    completedTodos: Todo[];
};

export default CompletedTodos;
