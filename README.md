![React Wave Audio Player Preview](https://raw.githubusercontent.com/theabhipatel/react-wave-audio-player/react-wave-audio-player.png)

# React Wave Audio Player

A **customizable React audio player** built with **TypeScript, Tailwind CSS, and WaveSurfer.js**. This package provides a fully responsive and visually appealing audio player with waveform visualization.

## 🚀 Features

- 🎵 **Waveform Visualization** using WaveSurfer.js
- 🎨 **Customizable Colors & Styles** (progress bar, cursor, buttons, etc.)
- 🎚️ **Adjustable Volume & Playback Speed**
- ⏯ **Play/Pause, Mute/Unmute Controls**
- 📥 **Audio Download Button**
- 🌙 **Works with Tailwind CSS** for styling

---

## 📦 Installation

### **1. Install the package**

```sh
npm install react-wave-audio-player
```

### **2. Install required peer dependencies**

Since this package depends on **react, react-dom, tailwindcss, wavesurfer.js, and react-icons**, ensure they are installed in your project:

```sh
npm install react react-dom tailwindcss wavesurfer.js react-icons
```

### **3. Configure Tailwind CSS (If not already set up)**

If you haven't set up Tailwind CSS, follow the official documentation:

🔗 **Tailwind CSS Setup:** [Using Tailwind with Vite](https://tailwindcss.com/docs/installation/using-vite)

---

## 📖 Usage

### **Basic Example**

```tsx
import React from "react";
import AudioPlayer from "react-wave-audio-player";

const App = () => {
  return (
    <div className="p-4">
      <AudioPlayer src="/audio/sample.mp3" />
    </div>
  );
};

export default App;
```

### **Customizing the Player**

```tsx
<AudioPlayer
  src="/audio/sample.mp3"
  waveColor="#a3aed0"
  progressColor="#3311db"
  cursorColor="blue"
  buttonsColor="#ff5722"
  barWidth={3}
  barRadius={2}
  barGap={1}
  height={80}
  playIcon={<YourCustomPlayIcon />}
  pauseIcon={<YourCustomPauseIcon />}
  volumeUpIcon={<YourCustomVolumeIcon />}
  volumeMuteIcon={<YourCustomMuteIcon />}
  playbackSpeeds={[0.5, 1, 1.5, 2]}
  onPlay={() => console.log("Playing")}
  onPause={() => console.log("Paused")}
  onVolumeChange={(vol) => console.log("Volume: ", vol)}
/>
```

---

## 🎨 Props & Customization

| Prop             | Type                       | Default                    | Description                        |
| ---------------- | -------------------------- | -------------------------- | ---------------------------------- |
| `src`            | `string`                   | **Required**               | URL of the audio file              |
| `waveColor`      | `string`                   | `"#a3aed0"`                | Color of waveform                  |
| `progressColor`  | `string`                   | `"#3311db"`                | Color of progress bar              |
| `cursorColor`    | `string`                   | `"blue"`                   | Color of cursor                    |
| `buttonsColor`   | `string`                   | `"#3311db"`                | Color of control buttons           |
| `barWidth`       | `number`                   | `2`                        | Width of waveform bars             |
| `barRadius`      | `number`                   | `2`                        | Radius of waveform bars            |
| `barGap`         | `number`                   | `1`                        | Gap between waveform bars          |
| `height`         | `number`                   | `100`                      | Height of the waveform             |
| `playIcon`       | `ReactNode`                | `<FaPlay />`               | Custom play icon                   |
| `pauseIcon`      | `ReactNode`                | `<FaPause />`              | Custom pause icon                  |
| `volumeUpIcon`   | `ReactNode`                | `<BsFillVolumeUpFill />`   | Custom volume up icon              |
| `volumeMuteIcon` | `ReactNode`                | `<BsFillVolumeMuteFill />` | Custom mute icon                   |
| `playbackSpeeds` | `number[]`                 | `[1, 1.5, 2]`              | Available playback speed options   |
| `onPlay`         | `() => void`               | `undefined`                | Callback when audio starts playing |
| `onPause`        | `() => void`               | `undefined`                | Callback when audio pauses         |
| `onVolumeChange` | `(volume: number) => void` | `undefined`                | Callback when volume changes       |

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

If you find any issues or want to contribute, feel free to open an issue or submit a pull request on GitHub.

🔗 **GitHub Repository:** [react-wave-audio-player](https://github.com/theabhipatel/react-wave-audio-player)

---

## ⭐ Support

If you like this package, please give it a ⭐ on GitHub!

Happy coding! 🚀🎵
