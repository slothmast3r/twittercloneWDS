import Button from "~/components/Button";
import {ProfileImage} from "~/components/ProfileImage";
import {useSession} from "next-auth/react";
import {FormEvent, useCallback, useLayoutEffect, useRef, useState} from "react";
import {api} from "~/utils/api";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
    if (textArea == null) return
    textArea.style.height = "0"
    textArea.style.height = `${textArea.scrollHeight}px`
}


export function NewTweetForm() {
    const session = useSession()
    if (session.status !== "authenticated") return null;

    return <Form/>;

}

function Form() {
    const session = useSession()
    const [inputValue, setInputValue] = useState("")
    const textAreaRef = useRef<HTMLTextAreaElement>()

    const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
        updateTextAreaSize(textArea);
        textAreaRef.current = textArea
    }, [])

    const trpcUtils = api.useContext()
    useLayoutEffect(() => {
        updateTextAreaSize(textAreaRef.current)
    }, [inputValue])
    if (session.status !== "authenticated") return null;


    const createTweet = (api as any).tweet.create.useMutation({
        onSuccess: (newTweet: any) => {
            setInputValue("");

            if(session.status !== "authenticated") return;

            trpcUtils.tweet.infiniteFeed.setInfiniteData({},(oldData) =>{
                if(oldData == null || oldData.pages[0] == null) return;
                const newCacheTweet = {
                    ...newTweet,
                    likeCount: 0,
                    likedByMe: false,
                    user:{
                        id: session.data.user.id,
                        name: session.data.user.name || null,
                        image: session.data.user.image || null
                    }
                }
                return {
                    ...oldData,
                    page:[{
                        ...oldData.pages[0],
                        tweets:[newCacheTweet, ...oldData.pages[0].tweets]
                    },
                        ...oldData.pages.slice(1)
                    ]
                }
            })
        }
    })

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        createTweet.mutate({content: inputValue})
    }

    return <form onSubmit={handleSubmit} className="flex flex-col gap-2 border-b px-4 py-y">
        <div className="flex gap-4">
            <ProfileImage src={session.data.user.image}></ProfileImage>
            <textarea ref={inputRef} onChange={e => setInputValue(e.target.value)} value={inputValue}
                      style={{height: 0}} className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
                      placeholder="What's happening"/>

        </div>
        <Button className="self-end">Tweet</Button>
    </form>
}
