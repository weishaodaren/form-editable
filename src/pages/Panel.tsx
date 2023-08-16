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
      {Array.from(widgets).map(([key, widget]) => {
        const Component = renderWidget(widget.name);
        return (
          Component && (
            <HoverCard key={key}>
              <Component type="primary" block>
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
