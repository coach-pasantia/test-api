import express from 'express';
class Server{
    constructor(){
        this.port = 3000;
        this.app = express();
        this.initMiddleware();
        this.initRoute();
    }

    initMiddleware(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }
    initRoute(){
        this.app.use('/', (req, res) => {
          res.send('Hello World');  
        });
        this.app.use('/api/v1/', (req, res) => {
            res.send('api');
        });
    }

    start(){
        this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });
    }
}

export default Server;