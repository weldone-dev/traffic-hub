import {makeAutoObservable} from "mobx";
import type {ITraceFile} from "../../helpers/types";

export class TraceAnalysisStore {
    files: ITraceFile[] = [];
    constructor() {
        makeAutoObservable(this);
        this.addFiles = this.addFiles.bind(this);
        this.updateFileStatus = this.updateFileStatus.bind(this);
        this.resetFiles = this.resetFiles.bind(this);
    }
    addFiles(fileList: FileList) {
        const added: ITraceFile[] = Array.from(fileList).map((file) => ({
            id: crypto.randomUUID(),
            file: file,
            status: "pending",
        }));

        this.files.push(...added);
        return added;
    }
    updateFileStatus(id: string, status: ITraceFile["status"], error?: string) {
        const file = this.files.find(f => f.id === id);
        if (!file) return;
        file.status = status;
        if (error) {
            file.errorMessage = error;
        }
    }
    resetFiles() {
        this.files = [];
    }
}
const traceAnalysisStore = new TraceAnalysisStore();
export default traceAnalysisStore;