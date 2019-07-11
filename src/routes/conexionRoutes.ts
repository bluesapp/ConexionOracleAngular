import { Router } from 'express';
import  conexionController  from '../controllers/conexionController';

class ConexionRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
config(): void {
    this.router.get('/', conexionController.index)
}

}

const conexionRoutes = new ConexionRoutes();
export default conexionRoutes.router;