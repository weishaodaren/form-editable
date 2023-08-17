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
        if (!widget) return null;

        const Component = renderWidget(widget.name);
        const { props } = widget;

        return (
          Component && (
            <Component key={key} {...props}>
              3asdkjahsdkjhaskdj
            </Component>
          )
        );
      })}
    </div>
  );
};

export default Panel;
