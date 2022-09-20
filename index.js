import express, { application } from 'express'
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000


app.listen(port, ()=> console.log('app running at: http://localhost:' + port))

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname + '/src/index.html'))
} )


app.use('/assets', express.static(__dirname + '/assets'))