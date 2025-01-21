import { DateTime } from "luxon"

interface MultiseletData{
    id: string,
    name: string,
    color: string
}

export const getMultiSelectFromBlock = (block: any) : MultiseletData[] | undefined => {
    return block?.["multi_select"] as MultiseletData[]
}

export const getPlainTextFromBlock = (block: any) : string | undefined => {
    if(!block?.type) return ""
    if(block.type == "rich_text"){
        return block?.rich_text?.[0]?.plain_text
    }else if(block.type == "title"){
        return block?.title?.[0]?.plain_text
    }else if(block.type == "date"){
        return block?.date?.start
    }
}

export const getDataFromBlock = (block: any) : string | undefined => {
    const data = getPlainTextFromBlock(block)
    if(!data) return undefined;
    return DateTime.fromISO(data).toFormat("dd-MM-yyyy")
}

export const getDatetimeFromBlock = (block: any) : string | undefined => {
    const data = getPlainTextFromBlock(block)
    if(!data) return undefined;
    return DateTime.fromISO(data).toFormat("dd-MM-YY HH:mm")
}

export const getUrl = (block: any) : string | undefined => {
    return block?.url
}