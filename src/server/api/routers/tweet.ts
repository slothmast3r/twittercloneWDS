import {z} from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const tweetRouter = createTRPCRouter({
    create: protectedProcedure
        .input(z.object({text: z.string()}))
        .mutation(async ({input: {text}, ctx}) => {
            const tweet = await ctx.prisma.tweet.create({
                data: {text, userId: ctx.session.user.id},
            });
            return tweet;
        }),
});
