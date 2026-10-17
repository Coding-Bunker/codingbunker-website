import NotionDatabaseEventsQueryProperties from "@/types/NotionDatabaseEventsQueryProperties"
import NotionDatabaseQueryType from "@/types/NotionDatabaseQueryType"
import axios, { AxiosRequestConfig } from "axios"
import { Client as NotionClient } from "@notionhq/client"
import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints"
import { DateTime } from "luxon"

const NotionApiClient = () => {
  const notionClient = (): NotionClient => {
    return new NotionClient({
      auth: process.env.NOTION_TOKEN,
    })
  }
  const request = (config: AxiosRequestConfig): any => {
    return axios.request({
      baseURL: "https://api.notion.com",
      headers: {
        Authorization: "Bearer " + process.env.NOTION_TOKEN,
        "Notion-Version": "2022-06-28",
      },
      ...config,
    })
  }

  const fetchSingleEvent = async (
    slug: string,
  ): Promise<undefined | PageObjectResponse> => {
    if (!process.env.NOTION_EVENTS_DATABASE) return undefined
    const data = await notionClient().databases.query({
      database_id: process.env.NOTION_EVENTS_DATABASE,
      page_size: 1,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    })

    return data.results?.[0] as PageObjectResponse
  }

  const fetchNextEvent = async (): Promise<
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse
    | undefined
  > => {
    if (!process.env.NOTION_EVENTS_DATABASE) return undefined
    const data = await notionClient().databases.query({
      database_id: process.env.NOTION_EVENTS_DATABASE,
      page_size: 1,
      sorts: [
        {
          direction: "ascending",
          property: "Date",
        },
      ],
      filter: {
        property: "Date",
        date: {
          after: DateTime.now().toFormat("yyyy-MM-dd HH:mm"),
        },
      },
    })

    return data.results?.[0]
  }

  const fetchLastEvents = async (): Promise<
    (
      | PageObjectResponse
      | PartialPageObjectResponse
      | PartialDatabaseObjectResponse
      | DatabaseObjectResponse
    )[]
  > => {
    if (!process.env.NOTION_EVENTS_DATABASE) return []
    const data = await notionClient().databases.query({
      database_id: process.env.NOTION_EVENTS_DATABASE,
      page_size: 3,
      sorts: [
        {
          direction: "descending",
          property: "Date",
        },
      ],
      filter: {
        property: "Date",
        date: {
          before: DateTime.now().toFormat("yyyy-MM-dd HH:mm"),
        },
      },
    })

    return data.results
  }

  const fetchPastEvents = async (): Promise<
    (
      | PageObjectResponse
      | PartialPageObjectResponse
      | PartialDatabaseObjectResponse
      | DatabaseObjectResponse
    )[]
  > => {
    if (!process.env.NOTION_EVENTS_DATABASE) return []
    const data = await notionClient().databases.query({
      database_id: process.env.NOTION_EVENTS_DATABASE,
      page_size: 1000,
      sorts: [
        {
          direction: "descending",
          property: "Date",
        },
      ],
      filter: {
        property: "Date",
        date: {
          before: DateTime.now().toFormat("yyyy-MM-dd HH:mm"),
        },
      },
    })

    return data.results
  }

  const fetchAllEvents = async (): Promise<
    (
      | PageObjectResponse
      | PartialPageObjectResponse
      | PartialDatabaseObjectResponse
      | DatabaseObjectResponse
    )[]
  > => {
    if (!process.env.NOTION_EVENTS_DATABASE) return []
    const data = await notionClient().databases.query({
      database_id: process.env.NOTION_EVENTS_DATABASE,
      page_size: 1000,
      sorts: [
        {
          direction: "descending",
          property: "Date",
        },
      ],
    })

    return data.results
  }

  const fetchCrew = async (): Promise<QueryDatabaseResponse | undefined> => {
    if (!process.env.NOTION_CREW_DATABASE) return undefined
    const data = await notionClient().databases.query({
      database_id: process.env.NOTION_CREW_DATABASE,
    })

    return data
  }

  const addSubscriber = async (email: string) => {
    const response = await request({
      url: `v1/databases/${process.env.NOTION_SUBSCRIBERS_DATABASE}/query`,
      method: "POST",
    })

    return response.data
  }

  return {
    fetchPastEvents,
    fetchAllEvents,
    fetchSingleEvent,
    fetchCrew,
    addSubscriber,
    fetchLastEvents,
    fetchNextEvent,
  }
}

export default NotionApiClient
