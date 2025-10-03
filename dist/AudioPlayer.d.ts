import { FC, ReactNode } from "react";
type AudioPlayerProps = {
    src: string;
    waveColor?: string;
    progressColor?: string;
    cursorColor?: string;
    buttonsColor?: string;
    barWidth?: number;
    barRadius?: number;
    barGap?: number;
    height?: number;
    className?: string;
    playIcon?: ReactNode;
    pauseIcon?: ReactNode;
    volumeUpIcon?: ReactNode;
    volumeMuteIcon?: ReactNode;
    playbackSpeeds?: number[];
    onPlay?: () => void;
    onPause?: () => void;
    onVolumeChange?: (volume: number) => void;
};
declare const AudioPlayer: FC<AudioPlayerProps>;
export default AudioPlayer;
//# sourceMappingURL=AudioPlayer.d.ts.map