export interface ITraceFile {
    id: string;
    file: File;
    status: "pending" | "uploading" | "success" | "error";
    errorMessage?: string;
    result?: any;
}


export interface ISearchFilters {
    protocol: {
        /** Процент UDP-протоколов (0–100) */
        udp?: number;
        /** Процент TCP-протоколов (0–100) */
        tcp?: number;
        /** Любой протокол (чекбокс) */
        any?: boolean;
    }
    /** Автоматически агрегированные значения фильтров, участвующих в поиске */
    selectedFromSearch?: string[];
}

export interface IResponseSearch {
    total: number;
    result: {
        title: string;
        description: string;
        tags: string[];
    }[]
}