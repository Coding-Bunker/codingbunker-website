export interface TextContent {
  content: string
  link: string | null
}

export interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface RichText {
  type: string
  text: TextContent
  annotations: Annotations
  plain_text: string
  href: string | null
}

export interface DateProperty {
  start: string
  end: string | null
  time_zone: string | null
}

export interface SelectOption {
  id: string
  name: string
  color: string
}

export interface User {
  object: string
  id: string
}

export interface Page<A> {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: User
  last_edited_by: User
  cover: string | null
  icon: string | null
  parent: {
    type: string
    database_id: string
  }
  archived: boolean
  in_trash: boolean
  properties: A
  url: string
  public_url: string | null
}

export default interface NotionDatabaseQueryType<A> {
  object: string
  results: Page<A>[]
  next_cursor: string | null
  has_more: boolean
  type: string
  page_or_database: Record<string, any>
  developer_survey: string
  request_id: string
}
