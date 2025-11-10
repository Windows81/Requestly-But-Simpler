import { useEffect, useRef } from "react";
const useAutoScrollableContainer = (content) => {
    const containerRef = useRef();
    const autoScrollRef = useRef(true);
    const onScroll = () => {
        const container = containerRef.current;
        const overflowHeight = container.scrollHeight - container.clientHeight;
        if (container.scrollTop < overflowHeight) {
            // scroll position is not at the end, user must have scrolled
            autoScrollRef.current = false;
        }
        else {
            autoScrollRef.current = true;
        }
    };
    useEffect(() => {
        if (containerRef.current && autoScrollRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [content]);
    return [containerRef, onScroll];
};
export default useAutoScrollableContainer;
