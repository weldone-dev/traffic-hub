export interface ITraceFile {
    id: string;
    file: File;
    status: "pending" | "uploading" | "success" | "error";
    errorMessage?: string;
    result?: any;
}