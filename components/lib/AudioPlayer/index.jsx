/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { PauseCircle } from "@mui/icons-material";
import "./style.css";

function AudioPlayer({ data, current, setCurrent }) {
	const [playing, setPlaying] = React.useState(false);
	const [duration, setDuration] = React.useState(0);
	const [currentTime, setCurrentTime] = React.useState(0);
	const [audios, setAudios] = React.useState([]);

	let audioRef = useRef(null);
	let progressRef = useRef(null);
	const animationRef = useRef();

	React.useEffect(() => {
		if (audioRef.current?.duration) {
			const duration_seconds = Math.floor(audioRef.current?.duration);
			setDuration(duration_seconds);
			if (progressRef.current) progressRef.current.max = duration_seconds.toString();
		}
	}, [audioRef?.current?.readyState, audioRef?.current?.onloadeddata]);

	const formatTime = (time) => {
		let formattedDuration = "";
		let minutes = Math.floor(time / 60);
		let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
		let seconds = Math.floor(time % 60);
		const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
		formattedDuration = formattedMinutes + ":" + formattedSeconds;
		return formattedDuration;
	};

	const whilePlaying = () => {
		progressRef.current.value = audioRef.current?.currentTime;
		progressRef.current.style.setProperty('--seek-before-width', `${progressRef.current.value / duration * 100}%`);
		setCurrentTime(progressRef.current.value);
		animationRef.current = requestAnimationFrame(whilePlaying);
		if (audioRef.current.ended) {
			cancelAnimationFrame(animationRef.current);
			setPlaying(false);
		}
	}

	// get all audio elements
	React.useEffect(() => {
		const allAudio = Array.from(document.querySelectorAll('audio'));
		setAudios(allAudio);
	}, [audioRef]);

	const play = () => {
		const playStatus = playing;
		const currentAudio = audios.filter(item => !item.paused)[0];
		if (currentAudio) currentAudio.pause();
		animationRef.current = requestAnimationFrame(whilePlaying);
		audioRef.current.play();
		setPlaying(!playStatus);
		setCurrent(data.id);
	}

	const pause = () => {
		setPlaying(false);
		audioRef.current?.pause();
		cancelAnimationFrame(animationRef.current);
		setCurrent("");
	}

	const handleSeek = (e) => {
		audioRef.current.currentTime = progressRef.current.value;
		progressRef.current.style.setProperty('--seek-before-width', `${progressRef.current.value / duration * 100}%`);
		setCurrentTime(progressRef.current.value);
	};


	return (
		<article className="podcast-container">
			<div className="podcast-img-container">
				<img
					className="podcast-img-thumbnail"
					loading="lazy"
					src={data.thumbnail}
					alt="thumbnail"
				/>
				<audio
					ref={audioRef}
					typeof="audio/mpeg"
					preload="metadata"
					src={data.url}
					id={data.id}
				/>
				<div className="podcast-overlay" />
				{(playing && current === data.id) ? (
					<div className="podcast-is-playing">
						{data?.url?.trim().length === 0 && (
							<p className="podcast-not-found">File not found</p>
						)}
						<PauseCircle onClick={pause} />
						<div className="podcast-audio-time">
							<div className="audio-timer">
								{/* current time */}
								<div className="current-time">{formatTime(currentTime)}</div>

								{/* progress bar */}
								<div className="progress-bar-container">
									<input
										className="progress-bar"
										type="range"
										value={currentTime}
										ref={progressRef}
										onChange={handleSeek}
									/>
								</div>

								{/* duration */}
								<div className="duration">
									{duration ? formatTime(duration) : "0:00"}
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="podcast-play-btn">
						<img
							src="/assets/icons/play-btn.svg"
							draggable={false}
							onClick={play}
							alt="play-audio"
						/>
					</div>
				)}
			</div>
			<div className="podcast-text-content">
				<p className="podcast-item-category">I-INVEST MONEY LOUNGE</p>
				<h3 className="podcast-item-title">{data.title}</h3>
				<p className="podcast-summary">{data?.summary}</p>
			</div>
		</article>
	);
};

export default AudioPlayer;
