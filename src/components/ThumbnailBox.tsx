import Image from "next/image"
import Button from "./Button"
import { saveAs } from 'file-saver';


interface Props {
    url: string
    height: number
    width: number
}

export default function ThumbnailBox({ url, height, width }: Props) {


    const downloadImage = () => {
        const imageUrl = document.getElementById(url) as HTMLImageElement
        const button = document.getElementById(`button-${url}`) as HTMLButtonElement
        button.textContent = "Downloading..."
        saveAs(imageUrl.src);
        button.textContent = "Download"
    }


    return (
        <div className="flex max-w-max flex-col gap-3">
            <div className="aspect-video w-[300px] rounded relative overflow-hidden">
                <Image id={url} className="object-cover w-full h-full" alt="Youtube Thumbnail" layout="fill" src={url} />
            </div>
            <div className="flex gap-2 justify-between text-black">
                <span className="text-lg">{width}x{height}</span>
                <Button id={`button-${url}`} onClick={downloadImage}>Download</Button>
            </div>
        </div>
    )
}
