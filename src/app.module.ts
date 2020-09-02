import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://db_user:gKtoCXLeVHqa06gw@cluster0.frbyv.gcp.mongodb.net/test?retryWrites=true&w=majority',
    ),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
