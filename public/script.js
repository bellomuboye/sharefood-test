const video = document.getElementById("videoPlayer");
    const counter = document.getElementById("counter");
    const source = document.getElementById("videoPlayerSource")
    const playlist = document.getElementById("playlist")
    const play = document.getElementById("play");
    const stop = document.getElementById("stop");
    const vid2 = document.getElementById("vid2");

    const progressBar = document.getElementById("progressBar");
    let videoDuration;
    video.controls = false;
    counter.innerText = "0 / ???";
    video.addEventListener("loadedmetadata", function () {
      videoDuration = Math.floor(video.duration);
      counter.innerText = "0 | " + videoDuration;
    });
    play.addEventListener("click", (e) => {
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    });
    stop.addEventListener("click", (e) => {
      video.pause();
      video.currentTime = 0;
    });
    video.addEventListener("timeupdate", () => {
      counter.innerText = Math.floor(video.currentTime) + " / " + videoDuration;
      progressBar.style.width =
        Math.floor((video.currentTime / video.duration) * 100) + "%";
    });

    playlist.addEventListener("click", (e) => {
      const vid = e.target.id.substr(3)
      source.setAttribute('src', `/video/${vid}`)
      video.load()
    })