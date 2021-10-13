import { createContext } from 'react'
import { IYoutubeData } from '../../types/IYoutubeData'

interface IContextApp {
    leftColumnVisible: boolean
    setLeftColumnVisible: (val: boolean) => void 
    scrollValue: number
    setScrollValue: (val: number) => void
    fetchYouTubeData: Array<IYoutubeData>
    setFetchYouTubeData: (val: Array<IYoutubeData>) => void
}

export const AppContext = createContext<IContextApp>({
    leftColumnVisible: false,
    setLeftColumnVisible: () => {},
    scrollValue: 0,
    setScrollValue: () => {},
    fetchYouTubeData: [],
    setFetchYouTubeData: () => {},
})