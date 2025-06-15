import {makeAutoObservable, reaction, runInAction} from "mobx";
import type {IResponseSearch, ISearchFilters} from "@/entities/stores";


export class SearchFilterStore {
    query = "";
    page = 1;
    content: IResponseSearch["result"] = [];
    total = 0;
    filters: ISearchFilters = {
        protocol: {},
        selectedFromSearch: []
    };

    constructor() {
        makeAutoObservable(this);
        this.setContent = this.setContent.bind(this);
        this.setQuery = this.setQuery.bind(this);
        this.setFilters = this.setFilters.bind(this);
        this.setPage = this.setPage.bind(this);
        this.reset = this.reset.bind(this);
        this.loadFromUrl = this.loadFromUrl.bind(this);
        this.updateUrlQuery = this.updateUrlQuery.bind(this);
        this.initFromUrl = this.initFromUrl.bind(this);

        reaction(
            () => this.serializeParams(),
            (paramsString) => {
                const newUrl = `${window.location.pathname}?${paramsString}`;
                window.history.replaceState(null, "", newUrl);
            }
        );
    }

    setContent(content: IResponseSearch["result"], total: number) {
        this.content = content;
        this.total = total;
    }

    setQuery(value: string) {
        this.query = value;
        this.page = 1;
    }

    loadFromUrl() {
        if (typeof window === "undefined") return;

        const params = new URL(window.location.href).searchParams;
        this.query = params.get("query") || "";
    }

    setFilters(filters: ISearchFilters) {
        this.filters = filters;
        this.page = 1;
    }

    setPage(value: number) {
        this.page = value;
    }

    reset() {
        this.query = "";
        this.page = 1;
        this.filters = {
            protocol: {},
            selectedFromSearch: []
        };
    }

    private serializeParams(): string {
        const params = new URLSearchParams();

        if (this.query) params.set("query", this.query);
        if (this.page && this.page > 1) params.set("page", String(this.page));

        // фильтры — протоколы
        if (this.filters.protocol.any) {
            params.set("protocols", "any");
        } else {
            const parts: string[] = [];
            if (this.filters.protocol.udp !== undefined) parts.push(`udp[${this.filters.protocol.udp}]`);
            if (this.filters.protocol.tcp !== undefined) parts.push(`tcp[${this.filters.protocol.tcp}]`);
            if (parts.length) params.set("protocols", parts.join(","));
        }

        // selectedFromSearch (через запятую)
        if (this.filters.selectedFromSearch && this.filters.selectedFromSearch.length > 0) {
            params.set("selected", this.filters.selectedFromSearch.join(","));
        }

        return params.toString();
    }

    updateUrlQuery() {
        if (typeof window === "undefined") return;

        const url = new URL(window.location.href);
        if (this.query) {
            url.searchParams.set("query", this.query);
        } else {
            url.searchParams.delete("query");
        }
        window.history.replaceState(null, "", url.toString());
    }

    initFromUrl() {
        const params = new URLSearchParams(window.location.search);

        this.query = params.get("query") || "";
        this.page = params.has("page") ? Number(params.get("page")) || 1 : 1;

        const protocols = params.get("protocols");
        if (protocols === "any") {
            this.filters.protocol.any = true;
            this.filters.protocol.udp = undefined;
            this.filters.protocol.tcp = undefined;
        } else if (protocols) {
            this.filters.protocol.any = false;
            const udpMatch = protocols.match(/udp\[(\d+)]/);
            const tcpMatch = protocols.match(/tcp\[(\d+)]/);
            this.filters.protocol.udp = udpMatch ? Number(udpMatch[1]) : undefined;
            this.filters.protocol.tcp = tcpMatch ? Number(tcpMatch[1]) : undefined;
        }

        const selected = params.get("selected");
        this.filters.selectedFromSearch = selected ? selected.split(",") : [];
    }
}

const searchFilterStore = new SearchFilterStore();
export default searchFilterStore;