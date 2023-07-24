"use client"

import Button from "@/components/Button";
import Input from "@/components/Input";
import ThumbnailBox from "@/components/ThumbnailBox";
import React, { useState, useEffect } from "react"
import { YoutubeThumbnailResult } from "../../types/youtube";

export default function YoutubeThumbnailDownload() {

    const [data, setData] = useState<YoutubeThumbnailResult>()
    const [url, setUrl] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };

    const getThumbnails = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if (!url) return

        setIsLoading(true)

        try {
            const fetchUrl = `https://script.google.com/macros/s/AKfycbwmgApFxWYTxpR4TkMT_BQ5clure9rRBh6rb8ivVGw7uCm5L_IKOAwCMPPuWxgUknk/exec?videoLink=${url}`
            const res = await fetch(fetchUrl)
            const result = await res.json()

            setIsLoading(false)

            if (result.success) {
                return setData(result)
            }
        } catch (error) {
            setIsLoading(false)
        }

    }

    return (
        <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col gap-3 md:flex-row">
                <Input onChange={onChange} name="url" placeholder="Enter Video Link" />
                <Button onClick={getThumbnails} >{isLoading ? "Genrating.." : "Genrate"}</Button>
            </div>
            {data?.success &&
                <div className="flex gap-5 flex-col">
                    <ThumbnailBox {...data.data.defaultThumbnail} />
                    <ThumbnailBox {...data.data.mediumThumbnail} />
                    <ThumbnailBox {...data.data.highThumbnail} />
                    <ThumbnailBox {...data.data.standardThumbnail} />
                    <ThumbnailBox {...data.data.maxresThumbnail} />
                </div>
            }
        </div>
    )
}
