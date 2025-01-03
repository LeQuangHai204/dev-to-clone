// ~/server/api/posts.ts
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const postRouter = createTRPCRouter({
    publish: publicProcedure
        .input(
            z.object({
                title: z.string(),
                content: z.string(),
                tags: z.array(z.string()),
            })
        )
        .query(({ input }) => {
            const { title, content, tags } = input;
            return {
                greeting: title + content + tags,
            };
        }),
});
