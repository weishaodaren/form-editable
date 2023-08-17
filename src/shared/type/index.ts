import type { ForwardRefExoticComponent, RefAttributes } from 'react';

interface Widget {
  key: string;
  name: string;
  description: string;
  props: any;
  render: <ComponentProps = unknown>(
    props: ComponentProps,
  ) => ForwardRefExoticComponent<ComponentProps & RefAttributes<HTMLElement>>;
}

type WidgetProps = Omit<Widget, 'render'>;

export type { Widget, WidgetProps };
