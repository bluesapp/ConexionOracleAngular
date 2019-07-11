# ConexionOracleAngular
Modulo de conexion oracle angular

# database
const oracledb = require('oracledb');


const config = {
  user: 'basdat',
  password: 'basdat',
  connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.61.8)(PORT=1581))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=orcl.carvajal.com)))'

}


export default config ;

# conexionController

    import {Request, Response  } from 'express';
    const oracledb = require('oracledb');

    import config from '../database'

    class ConexionController {
     public index (req: Request, res: Response) {
     async function getEmployee () {
      let conn
    
      try {
        conn = await oracledb.getConnection(config)
    
        const result = await conn.execute(
          "SELECT MOVULTFUE FROM ORMOVULT WHERE MOVULTFUE = 'RX'" 
          //'select AUTOHIS from games where AUTOHIS = 261372',
          //[idGames]
        )
          
        res.json(result.rows);
      } catch (err) {
        console.log('Perdida de Conexion', err);
        
      }
    }
    


    getEmployee();
    
    
    }
    }

    const conexionController = new ConexionController();

    export default conexionController;


