import React, { useState, useEffect, useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let hasPlayed = false;

    const playAudio = async () => {
      if (hasPlayed) return;
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        hasPlayed = true;
        
        // Remove listeners once it successfully plays
        document.removeEventListener('click', playAudio);
        document.removeEventListener('scroll', playAudio);
        document.removeEventListener('touchstart', playAudio);
      } catch (err) {
        console.log("Autoplay waiting for user interaction...");
      }
    };

    // Try playing immediately
    playAudio();

    // If it fails (due to browser policy), wait for the first interaction
    document.addEventListener('click', playAudio, { once: true });
    document.addEventListener('scroll', playAudio, { once: true });
    document.addEventListener('touchstart', playAudio, { once: true });

    return () => {
      document.removeEventListener('click', playAudio);
      document.removeEventListener('scroll', playAudio);
      document.removeEventListener('touchstart', playAudio);
    };
  }, []);

  return (
    <div className="audio-player-wrapper">
      <audio 
        ref={audioRef} 
        src="/assets/playlistsons-sitar-in-the-temple-of-rats-430832.mp3" 
        loop
      />
      <button 
        className={`audio-toggle-btn ${isPlaying ? 'playing' : ''}`} 
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
