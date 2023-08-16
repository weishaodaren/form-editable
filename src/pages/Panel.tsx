import { HoverCard } from '@/components';
import { useRootStore } from '@/model';
import { widgetsMap } from '@/shared/widgets';

const Panel = () => {
  /**
   * Context
   */
  const widgets = useRootStore(state => state.widgets);

  const renderWidget = (widget: string) => {
    if (!widgetsMap.has(widget)) return null;
    const { render } = widgetsMap.get(widget) ?? {};
    return render;
  };

  return (
    <div className="w-full">
      {widgets.map((widget, index) => {
        const Component = renderWidget(widget.name);
        return (
          Component && (
            <HoverCard key={index}>
              <Component key={index} type="primary" block>
                3asdkjahsdkjhaskdj
              </Component>
            </HoverCard>
          )
        );
      })}
    </div>
  );
};

export default Panel;
