import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import { FileModule } from "./file/file.module";
import { FileService } from "./file/file.service";
import { TrackModule } from "./track/track.module";
import * as path from 'path'


@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static'),}),
    MongooseModule.forRoot('mongodb+srv://Serhey:omega94cskill@cluster0.4xemy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    TrackModule,
    FileModule
  ]

})
export class AppModule{}