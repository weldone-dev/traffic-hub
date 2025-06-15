import {FC} from "react";
import {IResponseSearch} from "@/entities/stores";

interface IProps {
    content: IResponseSearch["result"][0];
}
export const CardItem:FC<IProps> = ({content: {title, description, tags} }) => {
    return (
        <article className={"w-full card px-[36px] py-[38px] flex flex-col gap-y-[12px]"}>
            <h1 className={"text_base"}>
                {title}
            </h1>
            <p className={"text_extra"}>{description}</p>
            <div className={"w-full flex flex-wrap gap-[12px] "}>
                {tags.map((tag, index)=> (
                    <div key={index} className={"py-[4px] px-[10px] text_filter"}>
                        {tag}
                    </div>
                ))}
            </div>
        </article>
    )
}