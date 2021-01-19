import { appSchema, Model, tableSchema } from '@nozbe/watermelondb'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'posts',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'body', type: 'string' },
        { name: 'is_pinned', type: 'boolean' },
      ]
    })
  ]
})

import { field } from '@nozbe/watermelondb/decorators'

class Post extends Model {
  static table = 'posts'

  @field('title') title:any;
  @field('body') body:any;
  @field('is_pinned') isPinned:any;
}

const adapter = new SQLiteAdapter({
  schema:mySchema,
  synchronous:true
})

export const database = new Database({
  adapter,
  modelClasses: [Post],
  actionsEnabled: true,
})
