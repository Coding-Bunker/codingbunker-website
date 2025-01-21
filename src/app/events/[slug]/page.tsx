import NotionApiClient from "@/apiClient/NotionApiClient"
import VideoPlayer from "@/components/VideoPlayer"
import { getMultiSelectFromBlock, getPlainTextFromBlock, getUrl } from "@/utils/NotionFormatter"
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import {DateTime} from 'luxon'
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import TagChip from "@/components/TagChip"

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const slug = (await params).slug
 
  // fetch data
  const pageData = await NotionApiClient().fetchSingleEvent(slug)
 
  return {
    title: getPlainTextFromBlock(pageData?.properties["Name"]) + " | Coding Bunker",
    description: getPlainTextFromBlock(pageData?.properties["SEO Description"])
  }
}
 

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

    const { slug } = await params
    const pageData = await NotionApiClient().fetchSingleEvent(slug)

    const tags = getMultiSelectFromBlock(pageData?.properties?.["Tags"]);
    const videoUrl = getUrl(pageData?.properties?.["Video Url"])
    const registrationLink = getUrl(pageData?.properties["Registration Link"]) 
    const venueMapLink = getPlainTextFromBlock(pageData?.properties["Venue Map Link"])
    const speakerCover = (pageData?.properties?.["Speaker Profile Image"] as any)?.files?.[0]?.file?.url
    const eventDate = DateTime.fromFormat(getPlainTextFromBlock(pageData?.properties["Date"]) || "", 'yyyy-MM-dd')
    // const cover = (pageData?.properties?.["Cover"] as any)?.files?.[0]?.file?.url
    //const speakerLinkedinUrl = getPlainTextFromBlock(pageData?.properties["Speaker Linkedin URL"])
    const isPast = eventDate < DateTime.now();

    return <>
      {/* {cover && <Image width={900} height={500} src={cover} alt={getPlainTextFromBlock(pageData?.properties["Cover"]) || ""} />} */}      
      <h1 className="text-4xl font-bold mb-2">{getPlainTextFromBlock(pageData?.properties["Name"])}</h1>
      <p>
      {venueMapLink ?
        <a href={venueMapLink}>{getPlainTextFromBlock(pageData?.properties["Venue"])}</a>
        :
        <>{getPlainTextFromBlock(pageData?.properties["Venue"])}</>
      }
      {" "} - {" "} 
      {pageData?.properties["Date"] &&
        <>{eventDate.setLocale("it").toFormat("dd MMMM yyyy")}</>
      }
      </p>
      {tags && tags.length > 0 &&
          <div className='tags flex flex-wrap flex-row gap-2 justify-end mt-2 mb-2'>
              {tags.map((tag, index) => (
                  <TagChip key={tag.id} name={tag.name}/>
              ))}
          </div>
      }
      <div className="mb-8"></div>
      <article className="flex flex-col gap-6 md:flex-row md:justify-between md:gap-12">
      <div className="flex flex-col max-w-md md:max-w-lg md:w-2/3">
      {videoUrl && 
          <VideoPlayer src={videoUrl} className="mb-4" />
        }
          <p className="text-lg">{getPlainTextFromBlock(pageData?.properties["Description"])}</p>
          <div className="flex flex-row items-start gap-4">
          {registrationLink && !isPast &&
            <a
              href={registrationLink}
              className="mt-4 inline-block text-white py-2 px-4 rounded border transition-all duration-300 hover:-translate-y-1.5"
              target="_blank"
              rel="noreferrer"
            >Registrati qui</a>
          }
          {venueMapLink && 
          <a
          href={venueMapLink}
          className="mt-4 inline-block text-white py-2 px-4 rounded border transition-all duration-300 hover:-translate-y-1.5"
          target="_blank"
          rel="noreferrer"
        >Vai all&apos;evento</a>
          }
          </div>
      </div>
      <div className="w-full md:w-1/3 md:flex flex-col md:justify-end">
        <p className="text-2xl font-bold text-center mb-4">{getPlainTextFromBlock(pageData?.properties["Speaker"])}</p>
        {speakerCover && <Image className="rounded-full" height={200} width={200} src={speakerCover} alt={getPlainTextFromBlock(pageData?.properties?.["Speaker"]) || ""} />}
        <p className="text-base mt-1">{getPlainTextFromBlock(pageData?.properties["Speaker Description"])}</p>
        {/* {speakerLinkedinUrl && 
          <p>{speakerLinkedinUrl}</p>
        } */}
        
      </div>
      </article>
    </>
  }


interface StaticParams{
  slug: string
}

export async function generateStaticParams() : Promise<StaticParams[]> {
    try{
        const talks = await NotionApiClient().fetchAllEvents()
        const out =  talks.map(single =>{
            return {
                slug: getPlainTextFromBlock((single as PageObjectResponse)?.properties?.slug)
            }
        }).filter(Boolean) as StaticParams[]
        return out
    }catch(e){
      console.log("We had an error", e)
        console.log(e)
        return []
    }
}