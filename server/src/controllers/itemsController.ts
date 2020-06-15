import { Request, Response} from 'express';
import knex from '../database/connection'
import baseUrl from '../../../mobile2/src/services/dynamicUrl'

class ItemsController {
  
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
    console.log(baseUrl)
    const serializedItems = items.map(item => {
        return{
            id: item.id,
            title: item.title,
            image_url: `http://${baseUrl.baseUrl}:3333/uploads/${item.image}`,
        }
    })

    return response.json(serializedItems);
  }
}

export default ItemsController;