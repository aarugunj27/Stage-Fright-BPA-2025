import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SpotifyIcon from "../assets/images/spotify-icon.svg";
import AppleMusicIcon from "../assets/images/apple-music-icon.svg";
import YoutubeMusicIcon from "../assets/images/youtube-music-icon.png";
import AmazonMusicIcon from "../assets/images/amazon-music-icon.png";
import Nights from "../assets/images/neonnights.jpg";
import RockBackgroundAnimation from "../components/RockBackgroundAnimation";

export default function Music() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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
      cover: "/placeholder.svg?height=300&width=300",
      tracks: [
        { title: "Thunder Road", duration: "4:02" },
        { title: "Echoes of Yesterday", duration: "3:56" },
        { title: "Velocity", duration: "3:30" },
      ],
    },
    {
      title: "Debut Daze",
      year: 2020,
      cover: "/placeholder.svg?height=300&width=300",
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
      url: "https://www.amazon.com/music/unlimited/?ref_=dmm_acq_mrn_d_br_z_6FVQ2BuP-c_c_720498402661_g_104333615228",
      icon: AmazonMusicIcon,
    },
  ];

  return (
    <>
      <NavBar />
      <RockBackgroundAnimation />
      <div className="min-h-screen bg-neonBlack bg-opacity-80 text-white">
        <header className="pt-10 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center">Our Music</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="mb-16">
            <h2 className="text-3xl text-neonPink font-bold mb-8">
              Latest Tracks
            </h2>
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
                            ? "bg-neonBlue"
                            : "hover:bg-neonPink"
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
          </section>

          <section className="mb-16">
            <h2 className="text-3xl text-neonPink font-bold mb-8">
              Discography
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {albums.map((album, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
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
            </div>
          </section>

          <section>
            <h2 className="text-3xl text-neonPink font-bold mb-8">
              Listen on Your Favorite Platform
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {streamingPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-zinc-950 rounded-lg shadow-md p-6 hover:scale-105 ease-in-out transition duration-300"
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
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
