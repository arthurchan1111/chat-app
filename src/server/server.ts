
import * as express from "express";
import * as http from "http";
import * as path from "path";
import * as socketio  from "socket.io";

export class Server{
  private port:number = 8000;
  public app:any = express();
  private server:any;
  private io:any ;

  constructor(){
    this.createHTTPServer();
    this.createSocket()
    this.get();
    this.loadAssets();
    this.listen();

  }

  private createHTTPServer():void{
    this.server = http.createServer(this.app);
  }
  private loadAssets():void{

    //this.app.use("/static", express.static(path.resolve(__dirname,  "..",  "..", "node_modules/react/umd/", "public/react.development.js")));
    //this.app.use(express.static(path.resolve(__dirname,  "..",  "..", "node_modules/react-dom/umd", "public/react-dom.development.js")));
    this.app.use(express.static(path.join(__dirname,"public")));

  }

  private get():void{
    this.app.get('*', (req,res) => res.sendFile(path.resolve(__dirname ,"../../index.html")));
  }

  private createSocket():void{
    this.io = socketio(this.server);
  }

  private listen(): void{
    this.server.listen(this.port, () => console.log("Listening on port 8000!"));
    this.io.on('connection', (socket:any) =>{
      console.log("A user connected");

      socket.on('disconnect', () => console.log('user disconnected'));
      socket.on('chat message' (msg)=> io.emit('chat message', msg));
    });
  }

}

let chatserver= new Server();
