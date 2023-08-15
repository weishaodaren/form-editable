import type { PropsWithChildren, FC } from 'react';

import { useDroppable } from '@dnd-kit/core';

type DroppableProps = {
  id: string;
};

const Droppable: FC<DroppableProps & PropsWithChildren> = ({ children, id = 'Droppable' }) => {
  /**
   * Hook
   */
  const { isOver, setNodeRef } = useDroppable({ id });

  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default Droppable;
