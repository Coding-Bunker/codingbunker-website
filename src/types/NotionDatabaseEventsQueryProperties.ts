import {
  DateProperty,
  RichText,
  SelectOption,
  User,
} from "./NotionDatabaseQueryType"

export default interface NotionDatabaseEventsQueryProperties {
  Description: {
    id: string
    type: string
    rich_text: RichText[]
  }
  Date: {
    id: string
    type: string
    date: DateProperty
  }
  "SEO Description": {
    id: string
    type: string
    rich_text: RichText[]
  }
  "Registration Link": {
    id: string
    type: string
    url: string | null
  }
  Created: {
    id: string
    type: string
    created_time: string
  }
  Type: {
    id: string
    type: string
    select: SelectOption
  }
  slug: {
    id: string
    type: string
    rich_text: RichText[]
  }
  Cover: {
    id: string
    type: string
    files: any[]
  }
  "Video Url": {
    id: string
    type: string
    url: string
  }
  Speaker: {
    id: string
    type: string
    people: User[]
  }
  Name: {
    id: string
    type: string
    title: RichText[]
  }
}
