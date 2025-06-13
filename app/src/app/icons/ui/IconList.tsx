"use client";
import * as Icons from "@/shared/icons";
import {IconItem} from "./IconItem";

export const IconList = () => {
    return Object.entries(Icons).map(([iconName, IconComponent], index) => (
        <IconItem key={index} iconName={iconName} IconComponent={IconComponent}/>
    ))
}