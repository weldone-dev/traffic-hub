"use client";
import {useEffect, useState, useCallback} from "react";
import {observer} from "mobx-react-lite";
import {useDebounce} from "@/shared/hooks";
import {useSearchFilter} from "@/entities/stores";
import {apiGetResult} from "../model/api";
import {Button, Search} from "@/shared/ui";
import {formatNumberWithCommas} from "@/shared/utils/format";
import {CardItem} from "@/views/SearchPage/ui/CardItem";
import {Checkbox} from "@/views/SearchPage/ui/Checkbox";
import {Slider} from "@/views/SearchPage/ui/Slider";
import {Pagination} from "@/views/SearchPage/ui/Pagination";

export const SearchPage = observer(() => {
    const searchFilterStore = useSearchFilter();
    const [query, setQuery] = useState(searchFilterStore.query);

    useEffect(() => {
        searchFilterStore.loadFromUrl();
        setQuery(searchFilterStore.query);
    }, [searchFilterStore]);

    const fetchResults = useCallback(async () => {
        if (!searchFilterStore.query.trim()) {
            searchFilterStore.setContent([], 0);
            return;
        }
        const response = await apiGetResult(searchFilterStore.query);
        searchFilterStore.setContent(response.result, response.total);
    }, [searchFilterStore]);

    const {flush} = useDebounce(fetchResults, 1000, [fetchResults]);

    const onChangeSearch = (e: { target: { value: any; }; }) => {
        const val = e.target.value;
        setQuery(val);
        searchFilterStore.setQuery(val);
    };

    const onKeyDownSearch = (e: { key: string; } ) => {
        if (e.key === "Enter") {
            flush();
        }
    };

    return (
        <article className={"box mb-[140px]"}>
            <Search
                value={query}
                onChange={onChangeSearch}
                onKeyDown={onKeyDownSearch}
                onClick={flush}
            />
            <div className={"mt-[72px]"}>
                <p className={"text_subtitle text-white/60 mb-[36px]"}>{formatNumberWithCommas(searchFilterStore.total || 0)} Найдено результатов</p>
               <div className={"flex gap-[72px]"}>
                      <ul className={"flex flex-col gap-[24px]"}>
                          {searchFilterStore.content.map((item, index) => (
                              <li key={index}>
                                  <CardItem content={item}/>
                              </li>
                          ))}
                      </ul>
                   <div className={"bg-navy rounded-[16px] p-[36px] flex flex-col gap-y-[36px]"}>
                       <Search className={"bg-steel-blue"} placeholder={"Приложения"}/>
                       <div className={"flex flex-col gap-[24px]"}>
                           <div className={"text_base text-white/60"}>Характер траффика</div>
                           {(["Видео", "Веб", "Телеметрия"]).map((label, index)=> (
                               <Checkbox key={index+label} label={label}/>
                           ))}
                       </div>
                       <div className={"flex flex-col gap-[24px]"}>
                           <div className={"text_base text-white/60"}>Тип трассы</div>
                           {(["Исследовательская", "Коммерческая"]).map((label, index)=> (
                               <Checkbox key={index+label} label={label}/>
                           ))}
                       </div>
                       <div className={"flex flex-col gap-[24px]"}>
                           <div className={"text_base text-white/60"}>Процент протоколов</div>
                           <Slider label={"UDP"} value={100}/>
                           <Slider label={"TCP"} value={50}/>
                           <Checkbox label={"Любой"}/>
                       </div>
                       <Search className={"bg-steel-blue"} placeholder={"Протоколы верхнего ур."}/>
                       <div className={"flex flex-col gap-[24px]"}>
                           <div className={"text_base text-white/60"}>Популярные протоколы</div>
                           {(["DNS", "HTTP", "HTTPS"]).map((label, index)=> (
                               <Checkbox key={index+label} label={label}/>
                           ))}
                       </div>
                       <div className={"flex flex-col gap-[24px]"}>
                           <div className={"text_base text-white/60"}>Выбранные фильтры из поиска</div>
                           <div className={"flex gap-[12px] flex-wrap"}>
                               {(["Telegram", "Chrome", "RTP", "RTSP"]).map((label, index)=> (
                                   <div key={index+label} className={"py-[10px] px-[24px] text-[16px] font-normal rounded-[12px] bg-emerald cursor-pointer"}>{label}</div>
                               ))}
                           </div>
                       </div>
                       <div className={"mt-[36px] flex gap-[15px]"}>
                           <Button color={"dark-slate"}>Отменить</Button>
                           <Button color={"emerald"}>Применить</Button>
                       </div>
                   </div>
               </div>
                <div className={"mt-[72px] mx-auto"}>
                    <Pagination currentPage={1} totalPages={100} onPageChange={()=> {}} />
                </div>
            </div>
        </article>
    );
});

