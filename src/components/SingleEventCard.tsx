import { getDataFromBlock, getMultiSelectFromBlock, getPlainTextFromBlock } from "@/utils/NotionFormatter"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import classNames from "classnames"
import Link from "next/link"
import TagChip from "./TagChip"

export interface SingleEventCardProps{
    event: PageObjectResponse
    className?: string
}



const SingleEventCard : React.FC<SingleEventCardProps> = ({event, className}) =>{

    const tags = getMultiSelectFromBlock(event.properties["Tags"]);
    

    return <Link href={"/events/"+getPlainTextFromBlock(event.properties["slug"])} className={classNames(className, "group flex cursor-pointer flex-col gap-2 rounded-md border text-white p-4 transition-all duration-300 hover:-translate-y-1.5")}>
        <div className="flex w-full justify-between gap-3 flex-row items-start">
            <p className="font-semibold">{getPlainTextFromBlock(event.properties["Name"])}</p>
            <div className="text-white whitespace-nowrap">{getDataFromBlock(event.properties["Date"])}</div>
        </div>
        <p className="truncate flex-1">
            {getPlainTextFromBlock(event.properties["Description"])}
        </p>
        {tags && tags.length > 0 &&
            <div className='tags flex flex-wrap flex-row gap-2 justify-end'>
                {tags.map((tag, index) => (
                    <TagChip key={tag.id} name={tag.name}/>
                ))}
            </div>
        }
            
    </Link>
}

export default SingleEventCard