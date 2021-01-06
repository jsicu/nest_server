import { Module } from '@nestjs/common';
import { CryptoController } from './crypto.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtContents } from './jwt.contents'; // 加密密钥
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtContents.secret,
      signOptions: { expiresIn: '8h' },
    }),
  ],
  providers: [JwtStrategy],
  controllers: [CryptoController],
})
export class CryptoModule {}
