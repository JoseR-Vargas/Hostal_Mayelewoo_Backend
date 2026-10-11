/**
 * Rate Limiting — Manual Setup Required
 *
 * @nestjs/throttler is not installed. To add rate limiting, run:
 *
 *   npm install @nestjs/throttler
 *
 * Then update src/app.module.ts:
 *
 *   import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
 *   import { APP_GUARD } from '@nestjs/core';
 *
 *   // In @Module imports:
 *   ThrottlerModule.forRoot([{ ttl: 60000, limit: 10 }]),
 *
 *   // In @Module providers:
 *   { provide: APP_GUARD, useClass: ThrottlerGuard },
 *
 * Then add @SkipThrottle() on read-only GET routes in controllers
 * where high-frequency polling is expected (e.g. dashboard reads).
 *
 * Recommended limits:
 *   - Auth endpoints (POST /api/auth/login): ttl 60000, limit 5
 *   - Write endpoints (POST /api/calculos-medidor): ttl 60000, limit 10
 *   - Read endpoints: skip throttle or set higher limit (e.g. 100)
 */
