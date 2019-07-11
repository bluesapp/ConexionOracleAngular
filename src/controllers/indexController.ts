import {Request, Response  } from 'express';

class IndexController {
  public index (req: Request, res: Response) {
    res.json({text: 'la API esta /api/conexion'});
    }
}

export const indexController = new IndexController();

