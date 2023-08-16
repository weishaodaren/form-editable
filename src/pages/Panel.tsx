import { HoverCard } from '@/components';
import { useRootStore } from '@/model';
import { widgetsMap } from '@/shared';

const Panel = () => {
  /**
   * Context
   */
  const widgets = useRootStore(state => state.widgets);

  const renderWidget = (widget: string) => {
    return widgetsMap[widget];
  };

  return widgets.map((widget, index) => {
    const Component = renderWidget(widget.title);
    return (
      <HoverCard key={index}>
        <Component key={index} />
      </HoverCard>
    );
  });
};

export default Panel;
