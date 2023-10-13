"use strict";(()=>{var e={};e.id=917,e.ids=[917,888,660],e.modules={209:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>f,default:()=>w,getServerSideProps:()=>m,getStaticPaths:()=>g,getStaticProps:()=>h,reportWebVitals:()=>x,routeModule:()=>b,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>E,unstable_getStaticProps:()=>S});var i=r(7093),a=r(5244),n=r(1323),o=r(7481),l=r.n(o),d=r(2292),u=r(8881),c=e([d,u]);[d,u]=c.then?(await c)():c;let p=i.PagesRouteModule,w=(0,n.l)(u,"default"),h=(0,n.l)(u,"getStaticProps"),g=(0,n.l)(u,"getStaticPaths"),m=(0,n.l)(u,"getServerSideProps"),f=(0,n.l)(u,"config"),x=(0,n.l)(u,"reportWebVitals"),S=(0,n.l)(u,"unstable_getStaticProps"),E=(0,n.l)(u,"unstable_getStaticPaths"),_=(0,n.l)(u,"unstable_getStaticParams"),y=(0,n.l)(u,"unstable_getServerProps"),v=(0,n.l)(u,"unstable_getServerSideProps"),b=new p({definition:{kind:a.x.PAGES,page:"/profiles/[id]",pathname:"/profiles/[id]",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:u});s()}catch(e){s(e)}})},8881:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>C,getStaticPaths:()=>b,getStaticProps:()=>_});var i=r(997),a=r(968),n=r.n(a),o=r(4726),l=r(8296),d=r(5566),u=r.n(d),c=r(1664),p=r.n(c),w=r(9812),h=r(4578),g=r(7843),m=r(9050),f=r(5138),x=r(1649),S=e([o,l,m]);[o,l,m]=S.then?(await S)():S;let v=new Intl.PluralRules;function E(e,t,r){return"one"===v.select(e)?t:r}let b=()=>({paths:[],fallback:"blocking"});async function _(e){let t=e.params?.id;if(null==t)return{props:{redirect:{destination:"/"}}};let r=(0,o.J)();return await r.profile.getById.prefetch({id:t}),{props:{id:t,trpcState:r.dehydrate()}}}function y({isFollowing:e,userId:t,isLoading:r,onClick:s}){let a=(0,x.useSession)();return"authenticated"!==a.status||a.data.user.id===t?null:i.jsx(f.Z,{disabled:r,onClick:s,small:!0,gray:e,children:e?"Following":"Follow"})}let C=({id:e=""})=>{let{data:t}=l.h.profile.getById.useQuery({id:e}),r=l.h.tweet.infiniteProfileFeed.useInfiniteQuery({userId:e},{getNextPageParam:e=>e.nextCursor}),s=l.h.useContext(),a=l.h.profile.toggleFollow.useMutation({onSuccess:({addedFollow:t})=>{s.profile.getById.setData({id:e},e=>{if(null!=e)return{...e,isFollowing:t,followersCount:e.followersCount+(t?1:-1)}})}});return t?.name?(0,i.jsxs)(i.Fragment,{children:[i.jsx(n(),{children:i.jsx("title",{children:`Ai For Education Hub ${t.name}`})}),(0,i.jsxs)("header",{className:"sticky top-0 z-10 flex items-center border-b bg-white px-4 py-2",children:[i.jsx(p(),{href:"..",className:"mr-2",children:i.jsx(w.Z,{children:i.jsx(h.gGS,{className:"h-6 w-6"})})}),i.jsx(g.m,{src:t.image,className:"flex-shrink-0"}),(0,i.jsxs)("div",{className:"ml-2 flex-grow",children:[i.jsx("h1",{className:"text-lg font-bold",children:t.name}),(0,i.jsxs)("div",{className:"text-gray-500",children:[t.tweetsCount," ",E(t.tweetsCount,"Tweet","Tweets")," -"," ",t.followersCount," ",E(t.followersCount,"Follower","Followers")," -"," ",t.followsCount," Following"]})]}),i.jsx(y,{isFollowing:t.isFollowing,isLoading:a.isLoading,userId:e,onClick:()=>a.mutate({userId:e})})]}),(0,i.jsxs)("main",{children:[" ",i.jsx(m.x,{tweets:r.data?.pages.flatMap(e=>e.tweets),isError:r.isError,isLoading:r.isLoading,hasMore:r.hasNextPage??!1,fetchNewTweets:r.fetchNextPage})]})]}):i.jsx(u(),{statusCode:404})};s()}catch(e){s(e)}})},9288:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{q:()=>l});var i=r(3157),a=r(8010),n=r(5175),o=e([i,a,n]);[i,a,n]=o.then?(await o)():o;let l=(0,a.hA)({tweet:i.p,profile:n.q});s()}catch(e){s(e)}})},5175:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{q:()=>o});var i=r(8010),a=r(9926),n=e([i,a]);[i,a]=n.then?(await n)():n;let o=(0,i.hA)({getById:i.$y.input(a.z.object({id:a.z.string()})).query(async({input:{id:e},ctx:t})=>{let r=t.session?.user.id,s=await t.db.user.findUnique({where:{id:e},select:{name:!0,image:!0,_count:{select:{followers:!0,follows:!0,tweets:!0}},followers:null==r?void 0:{where:{id:r}}}});return null==s?null:{name:s.name,image:s.image,followersCount:s._count.followers,followsCount:s._count.follows,tweetsCount:s._count.tweets,isFollowing:s.followers.length>0}}),toggleFollow:i.U5.input(a.z.object({userId:a.z.string()})).mutation(async({input:{userId:e},ctx:t})=>{let r;let s=t.session.user.id,i=await t.db.user.findFirst({where:{id:e,followers:{some:{id:s}}}});return null==i?(await t.db.user.update({where:{id:e},data:{followers:{connect:{id:s}}}}),r=!0):(await t.db.user.update({where:{id:e},data:{followers:{connect:{id:s}}}}),r=!1),t.revalidateSSG?.(`/profile/${e}`),t.revalidateSSG?.(`/profile/${s}`),{addedFollow:r}})});s()}catch(e){s(e)}})},3157:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{p:()=>l});var i=r(8010),a=r(9926),n=e([i,a]);[i,a]=n.then?(await n)():n;let l=(0,i.hA)({infiniteProfileFeed:i.$y.input(a.z.object({userId:a.z.string(),limit:a.z.number().optional(),cursor:a.z.object({id:a.z.string(),createdAt:a.z.date()}).optional()})).query(async({input:{limit:e=10,userId:t,cursor:r},ctx:s})=>await o({limit:e,ctx:s,cursor:r,whereClause:{userId:t}})),infiniteFeed:i.$y.input(a.z.object({onlyFollowing:a.z.boolean().optional(),limit:a.z.number().optional(),cursor:a.z.object({id:a.z.string(),createdAt:a.z.date()}).optional()})).query(async({input:{limit:e=10,onlyFollowing:t=!1,cursor:r},ctx:s})=>{let i=s.session?.user.id;return await o({limit:e,ctx:s,cursor:r,whereClause:null!=i&&t?{user:{followers:{some:{id:i}}}}:void 0})}),create:i.U5.input(a.z.object({content:a.z.string()})).mutation(async({input:{content:e},ctx:t})=>{let r=await t.db.tweet.create({data:{content:e,userId:t.session.user.id}});return t.revalidateSSG?.(`/profile/${t.session.user.id}`),r}),toggleLike:i.U5.input(a.z.object({id:a.z.string()})).mutation(async({input:{id:e},ctx:t})=>{let r={tweetId:e,userId:t.session.user.id},s=await t.db.like.findUnique({where:{userId_tweetId:r}});return null==s?(await t.db.like.create({data:r}),{addedLike:!0}):(await t.db.like.delete({where:{userId_tweetId:r}}),{addedLike:!1})})});async function o({whereClause:e,ctx:t,limit:r,cursor:s}){let i;let a=t.session?.user.id,n=await t.db.tweet.findMany({take:r+1,cursor:s?{createdAt_id:s}:void 0,orderBy:[{createdAt:"desc"},{id:"desc"}],where:e,select:{id:!0,content:!0,createdAt:!0,_count:{select:{likes:!0}},likes:null!=a&&{where:{userId:a}},user:{select:{id:!0,name:!0,image:!0}}}});if(n.length>r){let e=n.pop();null!=e&&(i={id:e.id,createdAt:e.createdAt})}return{tweets:n.map(e=>({id:e.id,content:e.content,createdAt:e.createdAt,likeCount:e._count.likes,user:e.user,likedByMe:e.likes?.length>0})),nextCursor:i}}s()}catch(e){s(e)}})},4726:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{J:()=>u});var i=r(5468),a=r(9288),n=r(72),o=r.n(n),l=r(8010),d=e([i,a,l]);function u(){return(0,i.createServerSideHelpers)({router:a.q,ctx:(0,l.wP)({session:null,revalidateSSG:null}),transformer:o()})}[i,a,l]=d.then?(await d)():d,s()}catch(e){s(e)}})},8010:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{$y:()=>h,U5:()=>m,hA:()=>w,wP:()=>c});var i=r(2937),a=r(72),n=r.n(a),o=r(9926),l=r(8437),d=r(8943),u=e([i,o,l,d]);[i,o,l,d]=u.then?(await u)():u;let c=e=>({session:e.session,revalidateSSG:e.revalidateSSG,db:d.db}),p=i.initTRPC.context().create({transformer:n(),errorFormatter:({shape:e,error:t})=>({...e,data:{...e.data,zodError:t.cause instanceof o.ZodError?t.cause.flatten():null}})}),w=p.router,h=p.procedure,g=p.middleware(({ctx:e,next:t})=>{if(!e.session?.user)throw new i.TRPCError({code:"UNAUTHORIZED"});return t({ctx:{session:{...e.session,user:e.session.user}}})}),m=p.procedure.use(g);s()}catch(e){s(e)}})},8437:(e,t,r)=>{r.a(e,async(e,t)=>{try{var s=r(2104);r(3227);var i=r(3876),a=r.n(i),n=r(9057),o=r(8943),l=e([n,o]);[n,o]=l.then?(await l)():l,(0,s.PrismaAdapter)(o.db),a()({clientId:n.O.DISCORD_CLIENT_ID,clientSecret:n.O.DISCORD_CLIENT_SECRET}),t()}catch(e){t(e)}})},8943:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{db:()=>l});var i=r(3524),a=r(9057),n=e([a]);a=(n.then?(await n)():n)[0];let o=globalThis,l=o.prisma??new i.PrismaClient({log:"development"===a.O.NODE_ENV?["query","error","warn"]:["error"]});"production"!==a.O.NODE_ENV&&(o.prisma=l),s()}catch(e){s(e)}})},2104:e=>{e.exports=require("@next-auth/prisma-adapter")},3524:e=>{e.exports=require("@prisma/client")},3227:e=>{e.exports=require("next-auth")},3876:e=>{e.exports=require("next-auth/providers/discord")},1649:e=>{e.exports=require("next-auth/react")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},5566:e=>{e.exports=require("next/error")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},4336:e=>{e.exports=require("react-infinite-scroll-component")},997:e=>{e.exports=require("react/jsx-runtime")},72:e=>{e.exports=require("superjson")},6206:e=>{e.exports=import("@t3-oss/env-nextjs")},272:e=>{e.exports=import("@trpc/client")},7455:e=>{e.exports=import("@trpc/next")},5468:e=>{e.exports=import("@trpc/react-query/server")},2937:e=>{e.exports=import("@trpc/server")},9926:e=>{e.exports=import("zod")},1017:e=>{e.exports=require("path")},9057:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{O:()=>o});var i=r(6206),a=r(9926),n=e([i,a]);[i,a]=n.then?(await n)():n;let o=(0,i.createEnv)({server:{DATABASE_URL:a.z.string().url().refine(e=>!e.includes("YOUR_MYSQL_URL_HERE"),"You forgot to change the default URL"),NODE_ENV:a.z.enum(["development","test","production"]).default("development"),NEXTAUTH_SECRET:a.z.string().min(1),NEXTAUTH_URL:a.z.preprocess(e=>process.env.VERCEL_URL??e,process.env.VERCEL?a.z.string().min(1):a.z.string().url()),DISCORD_CLIENT_ID:a.z.string(),DISCORD_CLIENT_SECRET:a.z.string()},client:{},runtimeEnv:{DATABASE_URL:process.env.DATABASE_URL,NODE_ENV:"production",NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,NEXTAUTH_URL:process.env.NEXTAUTH_URL,DISCORD_CLIENT_ID:process.env.DISCORD_CLIENT_ID,DISCORD_CLIENT_SECRET:process.env.DISCORD_CLIENT_SECRET},skipValidation:!!process.env.SKIP_ENV_VALIDATION});s()}catch(e){s(e)}})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[174,746,481,450,605,675,292,809],()=>r(209));module.exports=s})();