import React, { useRef, useState, useMemo, useEffect } from 'react';

import throttle from 'utils/throttle';

interface IProps<T> {
  list: T[];
  styleClassName: string;
  gap?: number;
  threshold?: number;
  Component: React.FC<{ item: T }>;
}

function VirtualizedList<T extends { id: number }>({
  list,
  Component,
  threshold = 2,
  gap = 0,
  styleClassName
}: Readonly<IProps<T>>) {
  const [listToRender, setListToRender] = useState({ start: 0, end: 1 });
  const [elHeight, setElHeight] = useState(0);
  const parentContainerRef = useRef<any>(null);

  const calcListToRender = useMemo(
    () =>
      throttle(() => {
        const containerHeight = parentContainerRef.current?.parentElement.offsetHeight;
        const { scrollTop } = parentContainerRef.current?.parentElement;
        const startIndex = Math.max(0, Math.floor(scrollTop / elHeight) - threshold);
        const endIndex = Math.min(list.length - 1, Math.ceil((scrollTop + containerHeight) / elHeight + threshold));

        setListToRender({
          start: startIndex,
          end: endIndex
        });
      }, 50),
    [elHeight, list.length, threshold]
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      const childElement = parentContainerRef.current?.children[0];
      const elementHeight = childElement.offsetHeight + 2 * gap;

      setElHeight(elementHeight);
      parentContainerRef.current?.setAttribute('style', `height:${elementHeight * list.length}px`);
      calcListToRender();
      clearTimeout(timeout);
    });
  }, [list.length]);

  return (
    <div ref={parentContainerRef} className={styleClassName} onWheel={calcListToRender}>
      {list?.slice(listToRender.start, listToRender.end).map((item: T, index: number) => (
        <div
          // @ts-ignore
          style={{ '--gap': `${gap}px`, '--top': `${(listToRender.start + index) * elHeight}px` }}
          key={item.id}
        >
          <Component item={item} />
        </div>
      ))}
    </div>
  );
}

export default VirtualizedList;
