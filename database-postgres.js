import { sql } from './db.js'
import { randomUUID } from 'node:crypto'

export class DatabasePostgres {
  async list(search = ''){
    const videos = await sql`
      SELECT * from videos
      WHERE title ilike ${'%' +search+ '%'};
    `

    return videos
  }

  async create(video){
    const videoId = randomUUID()
    const { title, description, duration } = video

    await sql`
      INSERT INTO videos (id, title, description, duration) 
      VALUES (${videoId}, ${title}, ${description}, ${duration});
    `

  }

  async update(id, video) {
    const { title, description, duration } = video

    await sql`
      UPDATE videos
      SET title = ${title}, description = ${description}, duration = ${duration}
      WHERE id = ${id};
    `
  }

  async delete(id) {
    await sql`
      DELETE from videos
      WHERE id = ${id}
    `
  }
}