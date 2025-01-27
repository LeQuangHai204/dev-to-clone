import { createTRPCRouter } from './root';

import { articleRouter } from './routers/article';
import { imageRouter } from './routers/image';
import { userRouter } from './routers/user';

/**
 * This is the primary router for your server.
 * All routers in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    article: articleRouter,
    image: imageRouter,
    user: userRouter,
});

export type AppRouter = typeof appRouter;
