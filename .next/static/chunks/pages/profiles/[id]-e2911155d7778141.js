(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[917],{2335:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profiles/[id]",function(){return s(8881)}])},5138:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var n=s(5893);function l(e){let{small:t=!1,gray:s=!1,className:l="",...i}=e;return(0,n.jsx)("button",{className:"rounded-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ".concat(s?"bg-gray-400 hover:bg-gray-300 focus-visible:bg-gray-300":"bg-blue-500 hover:bg-blue-400 focus-visible:bg-blue-400"," ").concat(t?"px-2 py-1":"px-4 py-2 font-bold"," ").concat(l),...i})}},6545:function(e,t,s){"use strict";s.d(t,{x:function(){return f}});var n=s(5893),l=s(1664),i=s.n(l),r=s(8533),o=s(7843),a=s(3299),c=s(7152),u=s(9812),d=s(1975);function x(e){let{big:t=!1}=e;return(0,n.jsx)("div",{className:"flex justify-center p-2",children:(0,n.jsx)(c.Wet,{className:"animate-spin ".concat(t?"w-16 h-16":"w-10 h-10")})})}function f(e){let{tweets:t,isError:s,isLoading:l,fetchNewTweets:i,hasMore:o=!1}=e;return s?(0,n.jsx)("p",{children:"Error"}):l?(0,n.jsx)(x,{}):void 0==t||null==t||0===t.length?(0,n.jsx)("h2",{className:"text-2x1 my-4 text-center text-gray-500",children:"No tweets"}):(0,n.jsx)("ul",{children:(0,n.jsxs)(r.Z,{dataLength:t.length,next:i,hasMore:o,loader:(0,n.jsx)(x,{}),children:[t.map(e=>(0,n.jsx)(g,{...e},e.id))," "]})})}let h=new Intl.DateTimeFormat(void 0,{dateStyle:"short"});function g(e){let{id:t,user:s,content:l,createdAt:r,likeCount:a,likedByMe:c}=e,u=d.h.useContext(),x=d.h.tweet.toggleLike.useMutation({onSuccess:e=>{let{addedLike:s}=e;u.tweet.infiniteFeed.setInfiniteData({},e=>{if(null==e)return;let n=s?1:-1;return{...e,pages:e.pages.map(e=>({...e,tweets:e.tweets.map(e=>e.id===t?{...e,likeCount:e.likeCount+n,likedByMe:s}:e)}))}})}});return(0,n.jsxs)("li",{className:"flex gap-4 border-b px-4 py-4",children:[(0,n.jsx)(i(),{href:"profiles/".concat(s.id),children:(0,n.jsx)(o.m,{src:s.image})}),(0,n.jsxs)("div",{className:"flex flex-grow flex-col",children:[(0,n.jsxs)("div",{className:"flex gap-1",children:[(0,n.jsx)(i(),{href:"profiles/".concat(s.id),className:"font-bold outline-none hover:underline focus-visible:underline",children:s.name}),(0,n.jsx)("span",{className:"text-gray-500",children:"-"}),(0,n.jsx)("span",{className:"text-gray-500",children:h.format(r)})]}),(0,n.jsx)("p",{className:"whitespace-pre-wrap",children:l}),(0,n.jsx)(m,{onClick:function(){x.mutate({id:t})},isLoading:x.isLoading,likedByMe:c,likeCount:a})]})]})}function m(e){let{isLoading:t,onClick:s,likedByMe:l,likeCount:i}=e,r=(0,a.useSession)(),o=l?c.x5y:c.d$j;return"authenticated"!==r.status?(0,n.jsxs)("div",{className:"mb-1 mt-1 flex items-center gap-3 self-start text-gray-500",children:[(0,n.jsx)(o,{}),(0,n.jsxs)("span",{children:[" ",i]})]}):(0,n.jsxs)("button",{disabled:t,onClick:s,className:"dutarion-200 group flex items-center gap-1 self-start transition-colors ".concat(l?"text-red-500":"text-gray-500 hover:text-red-500 focus-visible:text-red-500"),children:[(0,n.jsx)(u.Z,{red:!0,children:(0,n.jsx)(o,{className:"transition-colors duration-200 ".concat(l?"fill-red-500":"fill-gray-500 group-hover:fill-red-500 group-focus-visible:fill-red-500")})}),(0,n.jsxs)("span",{children:[" ",i]})]})}},7843:function(e,t,s){"use strict";s.d(t,{m:function(){return r}});var n=s(5893),l=s(5675),i=s.n(l);function r(e){let{src:t,className:s=""}=e;return(0,n.jsx)("div",{className:"relative h-12 w-12 overflow-hidden rounded-full ".concat(s),children:null==t?null:(0,n.jsx)(i(),{fill:!0,src:t,alt:"Profile image",quality:100})})}},8881:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return N}});var n=s(5893),l=s(9008),i=s.n(l),r=s(1975),o=s(2918),a=s.n(o),c=s(1664),u=s.n(c),d=s(9812),x=s(7152),f=s(7843),h=s(6545),g=s(5138),m=s(3299);let j=new Intl.PluralRules;function w(e,t,s){return"one"===j.select(e)?t:s}function p(e){let{isFollowing:t,userId:s,isLoading:l,onClick:i}=e,r=(0,m.useSession)();return"authenticated"!==r.status||r.data.user.id===s?null:(0,n.jsx)(g.Z,{disabled:l,onClick:i,small:!0,gray:t,children:t?"Following":"Follow"})}var N=!0;t.default=e=>{var t,s;let{id:l=""}=e,{data:o}=r.h.profile.getById.useQuery({id:l}),c=r.h.tweet.infiniteProfileFeed.useInfiniteQuery({userId:l},{getNextPageParam:e=>e.nextCursor}),g=r.h.useContext(),m=r.h.profile.toggleFollow.useMutation({onSuccess:e=>{let{addedFollow:t}=e;g.profile.getById.setData({id:l},e=>{if(null!=e)return{...e,isFollowing:t,followersCount:e.followersCount+(t?1:-1)}})}});return(null==o?void 0:o.name)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:"Ai For Education Hub ".concat(o.name)})}),(0,n.jsxs)("header",{className:"sticky top-0 z-10 flex items-center border-b bg-white px-4 py-2",children:[(0,n.jsx)(u(),{href:"..",className:"mr-2",children:(0,n.jsx)(d.Z,{children:(0,n.jsx)(x.gGS,{className:"h-6 w-6"})})}),(0,n.jsx)(f.m,{src:o.image,className:"flex-shrink-0"}),(0,n.jsxs)("div",{className:"ml-2 flex-grow",children:[(0,n.jsx)("h1",{className:"text-lg font-bold",children:o.name}),(0,n.jsxs)("div",{className:"text-gray-500",children:[o.tweetsCount," ",w(o.tweetsCount,"Tweet","Tweets")," -"," ",o.followersCount," ",w(o.followersCount,"Follower","Followers")," -"," ",o.followsCount," Following"]})]}),(0,n.jsx)(p,{isFollowing:o.isFollowing,isLoading:m.isLoading,userId:l,onClick:()=>m.mutate({userId:l})})]}),(0,n.jsxs)("main",{children:[" ",(0,n.jsx)(h.x,{tweets:null===(t=c.data)||void 0===t?void 0:t.pages.flatMap(e=>e.tweets),isError:c.isError,isLoading:c.isLoading,hasMore:null!==(s=c.hasNextPage)&&void 0!==s&&s,fetchNewTweets:c.fetchNextPage})]})]}):(0,n.jsx)(a(),{statusCode:404})}},2918:function(e,t,s){e.exports=s(5480)}},function(e){e.O(0,[855,774,888,179],function(){return e(e.s=2335)}),_N_E=e.O()}]);