import express from 'express';
import mongoose from 'mongoose';
interface App_Interface{
  startServer():void;
  connectDatabse():Promise<void>;
  initializeRoutes():void;

}
export class App implements App_Interface{
  PORT: number;
  app:express.Application;
  
  constructor(){
    this.PORT=4000;
    this.app=express();
    this.startServer();
    this.initializeRoutes();
  }
  
  startServer():void{
    this.app.listen(this.PORT,()=>{
      console.log("Server started");
    })
  }
  async connectDatabse():Promise<void>{
    try{
      await mongoose.connect("")
      console.log("Database connected");
    }
    catch(error){
      console.log("URL Not Found")
    }
  }
  initializeRoutes():void{
    console.log("Routes initialized");
    
  }

}