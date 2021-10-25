import React, { useEffect, useState } from 'react';
import * as styled from './InputLink.styled';
import axios from 'axios';
import { config } from '../../config';
import { useYouTubeData } from '../../hooks/useYouTubeData';
import { useLeftColumn } from '../../hooks/useLeftColumn';
import Loading from '../Loading/Loading';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { callApi } from '../../helper/callApi';
import { IYoutubeData } from '../../types/IYoutubeData';

interface Props {
    id: string
}

const InputLink: React.FC<Props> = ({ id }) => {

    const { getInfo } = config.url.download

    const { setLeftColumnVisible } = useLeftColumn();
    const { fetchYouTubeData, setFetchYouTubeData } = useYouTubeData();

    const [inputValue, setInputValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)

    const endFetch = () => {
        setInputValue('')
        setLoading(false)
        setLeftColumnVisible(true)
    }

    const getYouTubeData = async () => {
        setLoading(true)
        try {
            const response = await callApi(getInfo, 'GET', { url: inputValue })
            if(response) {
                setFetchYouTubeData([...fetchYouTubeData, response.data])
                endFetch()
            }
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <>
            {loading && <Loading />}
            <styled.Container id={id}>
                <styled.InputWrapper>
                    <styled.Input placeholder='YouTube link' onChange={e => setInputValue(e.target.value)} value={inputValue} />
                    <styled.SearchIconContainer>
                        <styled.SearchIcon onClick={getYouTubeData} />
                    </styled.SearchIconContainer>
                </styled.InputWrapper>
            </styled.Container>
        </>
    )
}

export default InputLink;