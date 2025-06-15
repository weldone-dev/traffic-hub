import {responseOk} from "./mock";
import type {IResponseSearch} from "@/entities/stores";

export const apiGetResult = async (query: string):Promise<IResponseSearch> => {
    return responseOk();
}