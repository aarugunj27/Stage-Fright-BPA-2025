import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SpotifyIcon from "../assets/images/spotify-icon.svg";
import AppleMusicIcon from "../assets/images/apple-music-icon.svg";
import YoutubeMusicIcon from "../assets/images/youtube-music-icon.png";
import AmazonMusicIcon from "../assets/images/amazon-music-icon.png";
import Nights from "../assets/images/neonnights.jpg";
import Boom from "../assets/images/sonicboom.png";
import Daze from "../assets/images/debutedaze.png";
import RockBackgroundAnimation from "../components/RockBackgroundAnimation";

export default function Music() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const latestTracksRef = useRef(null);
  const discographyRef = useRef(null);
  const platformsRef = useRef(null);

  const isLatestTracksInView = useInView(latestTracksRef, {
    once: true,
    amount: 0.3,
  });
  const isDiscographyInView = useInView(discographyRef, {
    once: true,
    amount: 0.3,
  });
  const isPlatformsInView = useInView(platformsRef, {
    once: true,
    amount: 0.3,
  });

  const latestTracksControls = useAnimation();
  const discographyControls = useAnimation();
  const platformsControls = useAnimation();

  useEffect(() => {
    if (isLatestTracksInView) {
      latestTracksControls.start("visible");
    }
  }, [isLatestTracksInView, latestTracksControls]);

  useEffect(() => {
    if (isDiscographyInView) {
      discographyControls.start("visible");
    }
  }, [isDiscographyInView, discographyControls]);

  useEffect(() => {
    if (isPlatformsInView) {
      platformsControls.start("visible");
    }
  }, [isPlatformsInView, platformsControls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const discographyVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const albumVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const albums = [
    {
      title: "Neon Nights",
      year: 2024,
      cover: Nights,
      tracks: [
        { title: "Electric Dreams", duration: "3:45" },
        { title: "Midnight Ride", duration: "4:12" },
        { title: "Neon Heart", duration: "3:58" },
      ],
    },
    {
      title: "Sonic Boom",
      year: 2022,
      cover: Boom,
      tracks: [
        { title: "Thunder Road", duration: "4:02" },
        { title: "Echoes of Yesterday", duration: "3:56" },
        { title: "Velocity", duration: "3:30" },
      ],
    },
    {
      title: "Debut Daze",
      year: 2020,
      cover: Daze,
      tracks: [
        { title: "First Light", duration: "3:22" },
        { title: "Rookie Mistakes", duration: "3:45" },
        { title: "Learning to Fly", duration: "4:10" },
      ],
    },
  ];

  const streamingPlatforms = [
    { name: "Spotify", url: "https://open.spotify.com/", icon: SpotifyIcon },
    {
      name: "Apple Music",
      url: "https://www.apple.com/apple-music/",
      icon: AppleMusicIcon,
    },
    {
      name: "YouTube Music",
      url: "https://music.youtube.com/",
      icon: YoutubeMusicIcon,
    },
    {
      name: "Amazon Music",
      url: "https://music.amazon.com/",
      icon: AmazonMusicIcon,
    },
  ];

  return (
    <>
      <NavBar />
      <RockBackgroundAnimation />
      <div className="min-h-screen bg-neonBlack bg-opacity-80 text-white">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.section
            ref={latestTracksRef}
            initial="hidden"
            animate={latestTracksControls}
            variants={sectionVariants}
            className="mb-16"
          >
            <h1 className="text-4xl text-center text-white font-bold mb-8">
              Latest Tracks
            </h1>
            <div className="bg-zinc-950 rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src={albums[0].cover}
                  alt={`${albums[0].title} album cover`}
                  className="w-64 h-64 object-cover rounded-lg shadow-md"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">
                    {albums[0].title}
                  </h3>
                  <div className="space-y-4">
                    {albums[0].tracks.map((track, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-2 rounded ${
                          currentTrack === index
                            ? "bg-neonPink"
                            : "hover:bg-neonBlue"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => {
                              setCurrentTrack(index);
                              setIsPlaying(true);
                            }}
                            className="text-white hover:text-zinc-100"
                          >
                            {currentTrack === index && isPlaying ? (
                              <Pause size={20} />
                            ) : (
                              <Play size={20} />
                            )}
                          </button>
                          <span>{track.title}</span>
                        </div>
                        <span className="dark:text-white">
                          {track.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <button className="text-white hover:text-neonPink">
                      <SkipBack size={24} />
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-neonBlue hover:text-neonPink"
                    >
                      {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                    </button>
                    <button className="text-white hover:text-neonPink">
                      <SkipForward size={24} />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Volume2 size={20} className="text-white" />
                    <div className="w-24 h-2 bg-zinc-800 rounded-full">
                      <div className="w-3/4 h-full bg-neonBlue rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-zinc-800 rounded-full">
                  <div className="w-1/3 h-full bg-neonBlue rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            ref={discographyRef}
            initial="hidden"
            animate={discographyControls}
            variants={discographyVariants}
            className="mb-16"
          >
            <motion.h1
              variants={albumVariants}
              className="text-4xl text-white text-center font-bold mb-8"
            >
              Discography
            </motion.h1>
            <motion.div
              variants={albumVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {albums.map((album, index) => (
                <motion.div
                  key={index}
                  variants={albumVariants}
                  className="bg-zinc-950 hover:scale-105 transition duration-300 text-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={album.cover}
                    alt={`${album.title} album cover`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {album.title}
                    </h3>
                    <p className="text-neonPink mb-4">{album.year}</p>
                    <ul className="space-y-2">
                      {album.tracks.map((track, trackIndex) => (
                        <li key={trackIndex} className="flex justify-between">
                          <span>{track.title}</span>
                          <span className="text-neonBlue">
                            {track.duration}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            ref={platformsRef}
            initial="hidden"
            animate={platformsControls}
            variants={sectionVariants}
          >
            <h2 className="text-4xl text-white text-center font-bold mb-8">
              Platforms
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {streamingPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-black rounded-lg shadow-md p-6 hover:scale-105 ease-in-out transition duration-300"
                >
                  <img
                    src={platform.icon}
                    alt={`${platform.name} icon`}
                    className="h-8 w-8 mr-3"
                  />
                  <span className="text-lg font-medium">{platform.name}</span>
                </a>
              ))}
            </div>
          </motion.section>
        </main>
      </div>
      <Footer />
    </>
  );
}
