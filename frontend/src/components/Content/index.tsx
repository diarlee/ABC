import './Content.scss';
import { useRef, useState } from 'react';
import VideoModal from './VideoModal';
import openModal from '@/utils/openModal';
import { Clip } from '@/pages/VideoResultPage/type';

type Content = {
    clip: Clip;
};
//TODO : dialog tag를 활용해 썸네일 클릭 시 영상 전체 모달창 띄우기
export default function Content({ clip }: Content) {
    const videoDialogRef = useRef<HTMLDialogElement>(null);
    const [isReadyToLoadVideo, setIsReadyToLoadVideo] = useState(false);

    const onClickLoadVideoHandler = () => {
        setIsReadyToLoadVideo(!isReadyToLoadVideo);
    };
    return (
        <div className="content-container">
            <button
                className="thumbnail"
                onClick={() => {
                    openModal(videoDialogRef);
                    onClickLoadVideoHandler();
                }}
            ></button>
            <VideoModal
                ref={videoDialogRef}
                clip={clip}
                onClick={onClickLoadVideoHandler}
                isReadyToLoadVideo={isReadyToLoadVideo}
            />
        </div>
    );
}
