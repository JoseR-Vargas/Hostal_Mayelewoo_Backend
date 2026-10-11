import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { CalculosMedidorController } from './calculos-medidor.controller';
import { CalculosMedidorService } from './calculos-medidor.service';
import { CalculoMedidor, CalculoMedidorSchema } from './schemas/calculo-medidor.schema';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CalculoMedidor.name, schema: CalculoMedidorSchema }
    ]),
    AuthModule,
  ],
  controllers: [CalculosMedidorController],
  providers: [CalculosMedidorService, JwtAuthGuard],
  exports: [CalculosMedidorService]
})
export class CalculosMedidorModule {}
