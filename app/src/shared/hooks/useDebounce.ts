import { useEffect, useRef } from "react";

type UseDebounceReturn = {
    cancel: () => void;
    flush: () => void;
};

export function useDebounce(
    callback: () => void,
    delay: number,
    deps: unknown[]
): UseDebounceReturn {
    const handler = useRef<ReturnType<typeof setTimeout> | null>(null);
    const calledManually = useRef(false);

    const cancel = () => {
        if (handler.current) {
            clearTimeout(handler.current);
            handler.current = null;
        }
    };

    const flush = () => {
        cancel();
        calledManually.current = true;
        callback();
    };

    useEffect(() => {
        if (calledManually.current) {
            // Пропускаем запуск после flush
            calledManually.current = false;
            return;
        }

        cancel();
        handler.current = setTimeout(() => {
            callback();
            handler.current = null;
        }, delay);

        return cancel;
    }, deps);

    return { cancel, flush };
}
