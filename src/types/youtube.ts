export interface YoutubeThumbnailResult {
    success: boolean
    data: {

        maxresThumbnail: {
            url: string
            width: number
            height: number
        }
        highThumbnail: {
            url: string
            width: number
            height: number
        }
        defaultThumbnail: {
            url: string
            width: number
            height: number
        }
        mediumThumbnail: {
            url: string
            width: number
            height: number
        }
        standardThumbnail: {
            url: string
            width: number
            height: number
        }
    }
}

