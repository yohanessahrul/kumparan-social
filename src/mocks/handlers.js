import { rest } from 'msw'
import { BASEAPI } from '../constant/Api'

export const handlers = [
  rest.get(`${BASEAPI}/posts`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "cara masak ayam",
          "body": "bersihkan ayam dari bulu, cuci, siapkan bumbu, goreng, siap disantap"
        },])
    )
  })
]