import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SpotifyIcon from "../assets/images/spotify-icon.svg";
import AppleMusicIcon from "../assets/images/apple-music-icon.svg";
import YoutubeMusicIcon from "../assets/images/youtube-music-icon.svg";
import AmazonMusicIcon from "../assets/images/amazon-music-icon.svg";

export default function Music() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const albums = [
    {
      title: "Neon Nights",
      year: 2024,
      cover: "/placeholder.svg?height=300&width=300",
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
    { name: "Spotify", url: "/spotify", icon: SpotifyIcon },
    { name: "Apple Music", url: "/apple", icon: AppleMusicIcon },
    { name: "YouTube Music", url: "/youtube", icon: YoutubeMusicIcon },
    { name: "Amazon Music", url: "/amazon", icon: AmazonMusicIcon },
  ];

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
        <header className="bg-zinc-200 dark:bg-zinc-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center">Our Music</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Latest Tracks</h2>
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
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
                            ? "bg-sky-100 dark:bg-sky-900"
                            : "hover:bg-zinc-100 dark:hover:bg-zinc-700"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => {
                              setCurrentTrack(index);
                              setIsPlaying(true);
                            }}
                            className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300"
                          >
                            {currentTrack === index && isPlaying ? (
                              <Pause size={20} />
                            ) : (
                              <Play size={20} />
                            )}
                          </button>
                          <span>{track.title}</span>
                        </div>
                        <span className="text-zinc-500 dark:text-zinc-400">
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
                    <button className="text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400">
                      <SkipBack size={24} />
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300"
                    >
                      {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                    </button>
                    <button className="text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400">
                      <SkipForward size={24} />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Volume2
                      size={20}
                      className="text-zinc-600 dark:text-zinc-400"
                    />
                    <div className="w-24 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full">
                      <div className="w-3/4 h-full bg-sky-600 dark:bg-sky-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full">
                  <div className="w-1/3 h-full bg-sky-600 dark:bg-sky-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Discography</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {albums.map((album, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden"
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
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                      {album.year}
                    </p>
                    <ul className="space-y-2">
                      {album.tracks.map((track, trackIndex) => (
                        <li key={trackIndex} className="flex justify-between">
                          <span>{track.title}</span>
                          <span className="text-zinc-500 dark:text-zinc-400">
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
            <h2 className="text-3xl font-bold mb-8">
              Listen on Your Favorite Platform
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {streamingPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
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
