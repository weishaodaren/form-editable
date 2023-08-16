import type { FC, PropsWithChildren } from 'react';

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

type DraggableProps = {
  id: string;
};

const Draggable: FC<DraggableProps & PropsWithChildren> = ({ children, id = 'Draggable' }) => {
  /**
   * Hook
   */
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
};

export default Draggable;
