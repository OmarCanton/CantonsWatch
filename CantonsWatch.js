//STARTED 28TH DECEMBER, 2023
var body = document.querySelector("body");
var overlayContainer = document.getElementById("overlayContainer");
var videoContainer = document.getElementById("videoContainer");
var arrow = document.getElementById("arrow");
var hamburgerSVG = document.getElementById("hamburgerSVG");
var hamburgerSVGpath = document.querySelector("#hamburgerSVG path");
var arrowPath = document.querySelector("#arrow path");
var sideBar = document.getElementById("sideBar");
var home = document.getElementById("home");
var settings = document.getElementById("settings");
var share = document.getElementById("share");
var socialMediaShareIcons = document.getElementById("socialMediaShareIcons");
var playbackDropDown = document.getElementById("playbackDropDown");
var playbackDropDownPath = document.querySelector("#playbackDropDown path");
var playbackIcons = document.getElementById("playbackIcons");
var dropDown = document.getElementById("dropDown");
var dropDownPath = document.querySelector("#dropDown path");
var socialMediaShareIcons = document.getElementById("socialMediaShareIcons");
var info = document.getElementById("info");
var logo = document.getElementById("logo");
var addToLibraryContainer = document.getElementById("addToLibraryContainer");
var profile = document.getElementById("profileSVG");
var header = document.getElementById("header");
var playerName = document.getElementById("playerName");
var playlistContainer = document.getElementById("playlistContainer");
var playlistContainerDivs = document.querySelectorAll("#playlistContainer div");
var video = document.querySelector("video");
var videoPlayer = document.getElementById("videoPlayer");
var closeVideoPlayer = document.getElementById("closeVideoPlayer");
var img = document.querySelector("#playlistContainer img");
var oops = document.querySelector("#playlistContainer #oops");
var movedown = document.getElementById("movedown");
var movedownSVG = document.getElementById("movedownSVG");
var movedownPath = document.querySelector("#movedownSVG path");
var infoIcon = document.getElementById("infoIcon");
var threeDotsMenu = document.getElementById("threeDotsMenu");
var controlsMenu = document.getElementById("controlsMenu");
var loop = document.getElementById("loop");
var reset = document.getElementById("reset");
var forward15 = document.getElementById("forward15");
var backward15 = document.getElementById("backward15");
var volumeMute = document.getElementById("volumeMute");
var slow = document.getElementById("slow");
var stabilizeSpeed = document.getElementById("stabilizeSpeed");
var forward = document.getElementById("forward");
var videoPLayerMoveDown = document.getElementById("videoPLayerMoveDown");
var videoPLayerMoveDownPath = document.querySelector("#videoPLayerMoveDown path");
var playbackControls = document.getElementById("playbackControls");
var playbackOptions = document.getElementById("playbackOptions");
var endDuration = document.getElementById("endDuration");
var startDuration = document.getElementById("startDuration");
var seekBar = document.getElementById("seekBar");
var volumeMutePath = document.querySelector("#volumeMute path");
var volumeSlider = document.getElementById("volumeSlider");
var progressBar = document.getElementById("progressBar");
var playPause = document.getElementById("playPause");
var fullScreen = document.getElementById("fullScreen");
var fullScreenPath = document.querySelector("#fullScreen path");
var PictureInPicture = document.getElementById("PictureInPicture");
var volumeContainer = document.getElementById("volumeContainer");
var closeAndDown = document.getElementById("closeAndDown");
var PictureInPicturePath = document.querySelector("#PictureInPicture path");
var playAll = document.querySelectorAll("#playAll");
var shuffle = document.querySelectorAll("#shuffle");
var next = document.getElementById("next");
var previous = document.getElementById("previous");
var clearPlaylist = document.getElementById("clearPlaylist");
var downloadBtnContainer = document.getElementById("downloadBtnContainer");
var downloadScreen = document.getElementById("downloadScreen");
var closeDownloadScreen = document.getElementById("closeDownloadScreen");
var download = document.getElementById("download");
var movieURL = document.getElementById("movieURL");
var settingsScreen = document.getElementById("settingsScreen");
var closeSettingsScreen = document.getElementById("closeSettingsScreen");
var bright = document.getElementById("bright");
var dark = document.getElementById("dark");
var blueBlack = document.getElementById("blueBlack");
var brightCheck = document.getElementById("brightCheck");
var darkCheck = document.getElementById("darkCheck");
var blueBlackCheck = document.getElementById("blueBlackCheck");
var playbackIcon = document.getElementById("playbackIcon");
var PlaybackPlayAll = document.querySelector("#playbackIcons #playAll");
var PlaybackShuffle = document.querySelector("#playbackIcons #shuffle");
var snapchat = document.getElementById("snapchat");
var NightLightOverlay = document.getElementById("NightLightOverlay");
var enableDisableNightLight = document.getElementById("enableDisableNightLight");
var intensityBar = document.getElementById("intensityBar");
var label = document.getElementById("label");
var intensitySet = document.getElementById("intensitySet");
var facebook = document.getElementById("facebook");
var whatsapp = document.getElementById("whatsapp");
var instagram = document.getElementById("instagram");
var linkedln = document.getElementById("linkedln");
var tiktok = document.getElementById("tiktok");
var videoName =document.getElementById("videoName");
window.addEventListener("load", () => {
    setTimeout(() => {
        overlayContainer.classList.add("overlayShow");
    }, 2000);
    setTimeout(() => {
        logo.classList.add("animatelogoJS");
    }, 3950);
    setInterval(() => {
        img.classList.add("animateNoVideoImageJS");
    }, 7300);
    NightLightOverlay.style.opacity = intensityBar.value;
});
logo.addEventListener("click", () => {
    window.location.href = "CantonsWatch.html";
})
arrow.addEventListener("click", () => {
    if(arrowPath.getAttribute("d") === "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"){
        arrowPath.setAttribute("d", "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z");
        sideBar.classList.add("sideBarJS");
        arrow.style.fill ="orange";
        playlistContainer.classList.add("playlistContainerJS");
    } else {
        arrowPath.setAttribute("d", "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z");
        arrow.style.fill ="white";
        sideBar.classList.remove("sideBarJS");
        playlistContainer.classList.remove("playlistContainerJS");
    }
});
hamburgerSVG.addEventListener("click", () => {
    if(hamburgerSVG.getAttribute("viewBox") === "0 0 448 512") {
        hamburgerSVG.setAttribute("viewBox", "0 0 320 512")
        hamburgerSVGpath.setAttribute("d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z");
        hamburgerSVG.style.fill = "orange";
        sideBar.style.width = "30%";
    } else {
        hamburgerSVG.setAttribute("viewBox", "0 0 448 512");
        hamburgerSVGpath.setAttribute("d", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
        hamburgerSVG.style.fill = "white";
        sideBar.style.width = 0;
    }
});
let playbackDropDownIconIsClicked = false;
playbackDropDown.addEventListener("click", () => {
    let path1 = `M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z`;
    let path2 = `M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z`;
    if(playbackDropDownPath.getAttribute("d") === path1){
        playbackDropDownPath.setAttribute("d", path2);
        playbackDropDown.style.fill = "grey";
        playbackIcons.classList.add("playbackShowJS");
        share.style.top = "-7%";
        settings.style.top = "-67%";
        info.style.top = "-67%";
        playbackDropDownIconIsClicked = true;
        if(shareDropDownIsClicked == true){
            share.style.top = "-7%";
            settings.style.top = "-13%";
            info.style.top = "-13%";
        }
    } else {
        playbackDropDownPath.setAttribute("d", path1);
        playbackDropDown.style.fill = "rgb(13, 170, 243)";
        playbackIcons.classList.remove("playbackShowJS");
        share.style.top = "-40%";
        settings.style.top = "-100%";
        info.style.top = "-100%";
        playbackDropDownIconIsClicked = false;
        if(shareDropDownIsClicked == true){
            share.style.top = "-40%";
            settings.style.top = "-46%";
            info.style.top = "-46%";
        }
    }
    playbackOptions.scrollIntoView({
        behavior: "smooth"
    });
});
let shareDropDownIsClicked = false;
dropDown.addEventListener("click", () => {
    let path1 = `M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z`;
    let path2 = `M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z`;
    if(dropDownPath.getAttribute("d") === path1){
        dropDownPath.setAttribute("d", path2);
        dropDown.style.fill = "grey";
        socialMediaShareIcons.classList.add("shareShowJS");
        settings.style.top = "-46%";
        info.style.top = "-46%";
        if(playbackDropDownIconIsClicked == true){
            settings.style.top = "-13%";
            info.style.top = "-13%";
        }
        shareDropDownIsClicked = true;
    } else {
        dropDownPath.setAttribute("d", path1);
        dropDown.style.fill = "rgb(13, 170, 243)";
        socialMediaShareIcons.classList.remove("shareShowJS");
        settings.style.top = "-100%";
        info.style.top = "-100%";
        if(playbackDropDownIconIsClicked == true){
            settings.style.top = "-67%";
            info.style.top = "-67%";
        }
        shareDropDownIsClicked = false;
    }
    share.scrollIntoView({
        behavior: "smooth"
    });
});
downloadBtnContainer.addEventListener("click", () => {
    downloadScreen.classList.add("downloadScreenShowJS");
})
closeDownloadScreen.addEventListener("click", () => {
    downloadScreen.classList.remove("downloadScreenShowJS");
})
infoIcon.addEventListener("click", () => {
    info.scrollIntoView({
        behavior: "smooth"
    });
});
home.addEventListener("click", () => {
    window.location.href = "CantonsWatch.html";
});
profile.addEventListener("click", () => {
    pictureFile = document.createElement("input");
    pictureFile.type = "file";
    pictureFile.multiple = false;
    pictureFile.click();
    pictureFile.addEventListener("input", (event) => {
        let profileFile = event.target.files[0];
        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", URL.createObjectURL(profileFile));
        profile.remove();
        imageElement.setAttribute("style", "width: 80px; height: 60px; clip-path: circle(23px);")
        header.appendChild(imageElement);
        playerName.style.marginLeft = "50px";
    });
});
playbackControls.addEventListener("mouseover", () => {
    playbackControls.classList.add("showPlaybackControls");
});
playbackControls.addEventListener("mouseleave", () => {
    playbackControls.classList.remove("showPlaybackControls");
});
function playVideo () {
    if (video.paused) {
        video.play();
        playPause.innerHTML = `<path d="M200 160C186.8 160 176 170.8 176 184v144C176 341.3 186.8 352 200 352S224 341.3 224 328v-144C224 170.8 213.3 160 200 160zM312 160C298.8 160 288 170.8 288 184v144c0 13.25 10.75 24 24 24s24-10.75 24-24v-144C336 170.8 325.3 160 312 160zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>`;  
    } else {
        video.pause();
        playPause.innerHTML = `<path d="M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>`;
    }
}
playPause.addEventListener("click", () => {
    playVideo();
    video.volume = volumeSlider.value;
});
progressBar.addEventListener("click", (event) => {
    let clickPosition = event.clientX - progressBar.getBoundingClientRect().left;
    let seekBarProg = (clickPosition / progressBar.offsetWidth) * video.duration;
    video.currentTime = seekBarProg; 
});
video.addEventListener("timeupdate", () => {
    seekBar.style.backgroundColor = "lightgrey";
    seekBar.style.width = (video.currentTime / video.duration) * 100 + "%";
    seekBar.style.height = "100%";
    let NewCurrentTime = Math.floor(video.currentTime);
    let currentHours = Math.floor(NewCurrentTime / 3600);
    let currentHoursRem = NewCurrentTime % 3600;
    let currentMinutes = Math.floor(currentHoursRem / 60);
    let currentMinutesRem = currentHoursRem % 60;
    let currentSeconds = Math.floor(currentMinutesRem);
    if(currentHours < 1){
        startDuration.innerHTML = `${currentMinutes}:${currentSeconds.toString().padStart(2, 0)}`;
    } else {
        startDuration.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds}`;
    }
});
volumeMute.addEventListener("click", () => {
    if (video.volume != 0 && volumeMute.getAttribute("viewBox") === "0 0 640 512") {
        volumeMute.setAttribute("viewBox", "0 0 576 512");
        volumeMutePath.setAttribute("d", "M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z");
        video.volume = 0;
        volumeSlider.value = 0;
        volumeMute.style.fill = "grey";
    } else {
        volumeMute.setAttribute("viewBox", "0 0 640 512")
        volumeMutePath.setAttribute("d", "M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z");
        video.volume = 0.5;
        volumeSlider.value = 0.5;
        volumeMute.style.fill = "white";
    }
});
video.addEventListener("loadedmetadata", () => {
    let newDuration = Math.floor(video.duration);
    let dHours = Math.floor(newDuration / 3600);
    let hoursRem = newDuration % 3600;
    let dMinutes = Math.floor(hoursRem / 60);
    let minutesRem = hoursRem % 60;
    let dSeconds = Math.floor(minutesRem);
    if(dHours < 1){
        endDuration.innerHTML = `${dMinutes}:${dSeconds.toString().padEnd(2, 0)}`;
    } else {
        endDuration.innerHTML = `${dHours}:${dMinutes}:${dSeconds.toString().padEnd(2, 0)}`;
    }
    video.volume = volumeSlider.value;
});
videoPLayerMoveDown.addEventListener("click", () => {
    if(videoPLayerMoveDownPath.getAttribute("d") === "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"){
        videoPLayerMoveDownPath.setAttribute("d", "M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z");
        document.exitFullscreen();
        fullScreenPath.setAttribute("d", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z");
        video.classList.remove("videoFullScreenJS");  
        playbackControls.classList.remove("playbackControlsDisappearBackground");  
        video.style.boxShadow = "none";
    } else {
        videoPLayerMoveDownPath.setAttribute("d", "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z");
    }
    videoPlayer.classList.toggle("videoPlayerSlideDownJS");
});
addToLibraryContainer.addEventListener("click", () => {
    let videoFile = document.createElement("input");
    videoFile.multiple = true;
    videoFile.type = "file";
    videoFile.click();
    videoFile.addEventListener("input", (event) => {
        let selectedVideoFiles = event.target.files;
        const videoSourcesArray = [];
        const videoOnPlaylistArr = [];
        const videoNamesArray = [];
        for (let i = 0; i < selectedVideoFiles.length; i++) {
            const videoElement = document.createElement("video");
            videoElement.controls = false;
            const videoSources = document.createElement("source");
            videoSources.setAttribute("src", URL.createObjectURL(selectedVideoFiles[i]));
            videoSourcesArray.push(videoSources);
            video.appendChild(videoSources);
            videoOnPlaylistArr.push(videoElement);
            const parentDiv = document.createElement("div");
            const nameText = document.createElement("p");
            const span = document.createElement("span");
            const deleteBtns = document.createElement("div");
            const DelBtnsContainer = document.createElement("div");
            const shareBtns = document.createElement("div");
            deleteBtns.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/></svg>`;
            deleteBtns.setAttribute("style", "fill: lightgrey; height: 1.3rem; width: fit-content; cursor: pointer;");
            deleteBtns.addEventListener("mouseover", () => {
                deleteBtns.style.fill = "red";
            });
            deleteBtns.addEventListener("mouseleave", () => {
                deleteBtns.style.fill = "lightgrey";
            });
            shareBtns.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>`;
            shareBtns.setAttribute("style", "fill: lightgrey; height: 1.3rem; width: fit-content; cursor: pointer;");
            shareBtns.addEventListener("mouseover", () => {
                shareBtns.style.fill = "green";
            });
            shareBtns.addEventListener("mouseleave", () => {
                shareBtns.style.fill = "lightgrey";
            });
            videoElement.src = videoSources.src;
            nameText.innerHTML = selectedVideoFiles[i].name;
            videoNamesArray.push(selectedVideoFiles[i].name);
            DelBtnsContainer.appendChild(deleteBtns);
            DelBtnsContainer.appendChild(shareBtns);
            DelBtnsContainer.setAttribute("style", "display: flex; flex-direction: row; align-items: center; justify-content: space-between; flex-direction: row-reverse; box-shadow: none;");
            span.appendChild(nameText);
            span.appendChild(DelBtnsContainer);
            parentDiv.appendChild(videoElement);
            parentDiv.appendChild(span);
            playlistContainer.appendChild(parentDiv);
            img.remove();
            oops.remove();
            closeVideoPlayer.addEventListener("click", () => {
                videoPlayer.classList.remove("showVideoPlayerJS");
                videoPlayer.classList.remove("videoPlayerSlideDownJS");
                document.exitFullscreen();
                fullScreenPath.setAttribute("d", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z");
                video.classList.remove("videoFullScreenJS");  
                playbackControls.classList.remove("playbackControlsDisappearBackground");  
                video.style.boxShadow = "none";
                video.pause();
                video.currentTime = 0;
                videoPLayerMoveDownPath.setAttribute("d", "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z");
                video.volume = volumeSlider.value;
            });
            const allDelBtns = deleteBtns.querySelectorAll("svg");
            allDelBtns.forEach((del) => {
                del.addEventListener("click", () => {
                    parentDiv.remove();
                    if(playlistContainer.childElementCount > 0) {
                        parentDiv.remove();
                        clearPlaylist.classList.add("clearPlaylistShowJS");
                    } else {
                        setTimeout(() => {
                            clearPlaylist.classList.remove("clearPlaylistShowJS");
                            playlistContainer.appendChild(img);
                            playlistContainer.appendChild(oops);
                        }, 1000);
                    }
                });
            });
            let allShareBtns = shareBtns.querySelectorAll("svg");
            let clickCount = 0;
            allShareBtns.forEach((shareBut) => {
                shareBut.addEventListener("click", () => {
                    clickCount++;
                    if(parentDiv.style.backgroundColor != "orange"){
                        parentDiv.style.backgroundColor = "orange";
                        nameText.style.color = "white";
                    } else {
                        parentDiv.style.backgroundColor = "transparent";
                        nameText.style.color = "rgb(175, 175, 175)";
                    }
                    let path1 = `M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z`;
                    let path2 = `M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z`;
                    if(dropDownPath.getAttribute("d") === path1 && clickCount % 2 === 1){
                        dropDownPath.setAttribute("d", path2);
                        dropDown.style.fill = "grey";
                        socialMediaShareIcons.classList.add("shareShowJS");
                        settings.style.top = "-46%";
                        info.style.top = "-46%";
                        if(playbackDropDownIconIsClicked == true){
                            settings.style.top = "-13%";
                            info.style.top = "-13%";
                        }
                        shareDropDownIsClicked = true;
                        facebook.addEventListener("click", () => {
                            const videoUrl = videoElement.src;
                            const encodedVidUrl = encodeURIComponent(videoUrl);
                            const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedVidUrl}`;
                            window.open(facebookUrl);
                        });
                        snapchat.addEventListener("click", () => {
                            const videoUrl = videoElement.src;
                            const encodedVidUrl = encodeURIComponent(videoUrl);
                            const snapchatUrl = `https://www.snapchat.com/add?url=${encodedVidUrl}`;
                            window.open(snapchatUrl);
                        });
                        whatsapp.addEventListener("click", () => {
                            const videoUrl = videoElement.src;
                            const encodedVidUrl = encodeURIComponent(videoUrl);
                            const whatsappUrl = `https://www.api.whatsapp.com/send?text=${encodedVidUrl}`;
                            window.open(whatsappUrl);
                        });
                        instagram.addEventListener("click", () => {
                            const videoUrl = videoElement.src;
                            const encodedVidUrl = encodeURIComponent(videoUrl);
                            const instagramUrl = `https://www.instagram.com/create/story/?url=${encodedVidUrl}`;
                            window.open(instagramUrl);
                        });
                        linkedln.addEventListener("click", () => {
                            const videoUrl = videoElement.src;
                            const encodedVidUrl = encodeURIComponent(videoUrl);
                            const linkedlnUrl = `https://www.linkedln.com/shareArticle?url=${encodedVidUrl}`;
                            window.open(linkedlnUrl);
                        });
                        tiktok.addEventListener("click", () => {
                            const videoUrl = videoElement.src;
                            const encodedVidUrl = encodeURIComponent(videoUrl);
                            const tiktoklnUrl = `https://www.tiktok.com/upload?u=${encodedVidUrl}`;
                            window.open(tiktoklnUrl);
                        });
                        if(window.window.innerWidth <= 600){
                            hamburgerSVG.setAttribute("viewBox", "0 0 320 512")
                            hamburgerSVGpath.setAttribute("d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z");
                            hamburgerSVG.style.fill = "orange";
                            sideBar.style.width = "30%";
                        }
                    } else {
                        dropDownPath.setAttribute("d", path1);
                        dropDown.style.fill = "rgb(13, 170, 243)";
                        socialMediaShareIcons.classList.remove("shareShowJS");
                        settings.style.top = "-100%";
                        info.style.top = "-100%";
                        if(playbackDropDownIconIsClicked == true){
                            settings.style.top = "-67%";
                            info.style.top = "-67%";
                        }
                        shareDropDownIsClicked = false;
                        if(window.innerWidth <= 600){
                            hamburgerSVG.setAttribute("viewBox", "0 0 448 512");
                            hamburgerSVGpath.setAttribute("d", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
                            hamburgerSVG.style.fill = "white";
                            sideBar.style.width = 0;
                        }
                    }
                    share.scrollIntoView({
                        behavior: "smooth"
                    });
                })
            })
            //Scroll effects that only scrolls to the bottom ONLY if videos are added to playlist
            const myMutationObserver = new MutationObserver((mutationList) => {
                mutationList.forEach((mutation)=> {
                    if(mutation.type === "childList" && mutation.addedNodes.length > 0){
                        scrollDown();
                    }
                });
            });
            const playlistVideos = {childList : true, subtree: true};
            myMutationObserver.observe(playlistContainer, playlistVideos);
            //end
        }
        if(playlistContainer.childElementCount > 0){
            clearPlaylist.classList.add("clearPlaylistShowJS");
        } else {
            clearPlaylist.classList.remove("clearPlaylistShowJS");
        }
        clearPlaylist.addEventListener("click", () => {
            while(playlistContainer.firstChild){
                playlistContainer.removeChild(playlistContainer.firstChild);
            }
            if(playlistContainer.childElementCount <= 0){
                playlistContainer.appendChild(img);
                playlistContainer.appendChild(oops);
            }
            setTimeout(() => {
                clearPlaylist.classList.remove("clearPlaylistShowJS");
                movedown.classList.remove("movedownShowJS")
            }, 500);
        });

        //SCROLL EFFECTS 3rd JAN, 2024
        function scrollUp () {
            if(movedownPath.getAttribute("d", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z")) {
                playlistContainer.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }
        }
        function scrollDown (){
            playlistContainer.scrollTo({
                top: playlistContainer.scrollHeight,
                behavior: "smooth"
            });
        }

        playlistContainer.addEventListener("scroll", () => {
            if(playlistContainer.scrollTop <= 0){
                movedown.classList.remove("movedownShowJS");
            } else {
                movedown.classList.add("movedownShowJS");
            }
        })
        movedown.addEventListener("click", scrollUp);
        const myMutationObserver = new MutationObserver((mutationList) => {
            mutationList.forEach((mutation)=> {
                if(mutation.type === "childList" && mutation.addedNodes.length > 0){
                    scrollDown();
                }
            });
        });
        const playlistVideos = {childList : true, subtree: true};
        myMutationObserver.observe(playlistContainer, playlistVideos);
        //end of scroll event
        videoOnPlaylistArr.forEach((playlistVideo, vid) => {
            playlistVideo.addEventListener("click", () => {
                videoPlayer.classList.add("showVideoPlayerJS");
                video.src = videoOnPlaylistArr[vid].src;
                videoName.innerHTML = videoNamesArray[vid];
                videoPlayer.classList.remove("videoPlayerSlideDownJS");
                video.volume = volumeSlider.value;
                document.exitFullscreen();
                playVideo();
                videoPLayerMoveDownPath.setAttribute("d", "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z");
                
                next.addEventListener("click", () => {
                    vid++;
                    videoPlayer.classList.add("showVideoPlayerJS");
                    videoName.innerHTML = videoNamesArray[vid];
                    video.src = videoOnPlaylistArr[vid].src;
                    movedown.classList.remove("movedownShowJS");
                    videoPlayer.classList.remove("videoPlayerSlideDownJS");
                    video.volume = volumeSlider.value;
                    playVideo();
                    videoPLayerMoveDownPath.setAttribute("d", "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z");
                });

                previous.addEventListener("click", () => {
                    vid--;
                    videoPlayer.classList.add("showVideoPlayerJS");
                    videoName.innerHTML = videoNamesArray[vid];
                    video.src = videoOnPlaylistArr[vid].src;
                    movedown.classList.remove("movedownShowJS");
                    videoPlayer.classList.remove("videoPlayerSlideDownJS");
                    video.volume = volumeSlider.value;
                    playVideo();
                    videoPLayerMoveDownPath.setAttribute("d", "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z");
                
                })
            });
        })

        //PlayAll
        playAll.forEach((playAllBtns) => {
            playAllBtns.addEventListener("click", () => {
                let count = 0;
                if(playAllBtns.style.fill != "orange"){
                    playAllBtns.style.fill ="orange";
                    function playAllFunction () {
                        video.src = videoSourcesArray[count].src;
                        videoPlayer.classList.add("showVideoPlayerJS");
                        videoName.innerHTML = videoNamesArray[count];
                        movedown.classList.remove("movedownShowJS");
                        videoPlayer.classList.remove("videoPlayerSlideDownJS");
                        video.volume = volumeSlider.value;
                        playVideo();
                        videoPLayerMoveDownPath.setAttribute("d", "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z");
                    }
                    playAllFunction();
                    video.addEventListener("ended", () => {
                        count++;
                        video.src = videoSourcesArray[count].src;
                        videoName.innerHTML = videoNamesArray[count];
                        videoPlayer.classList.add("showVideoPlayerJS");
                        movedown.classList.remove("movedownShowJS");
                        videoPlayer.classList.remove("videoPlayerSlideDownJS");
                        video.volume = volumeSlider.value;
                        playVideo();    
                    });
                } else {
                    playAllBtns.style.fill = "white";
                }
                next.addEventListener("click", () => {
                    count++;
                    playAllFunction();
                });
                previous.addEventListener("click", () => {
                    count--;
                    playAllFunction();
                });
            });
        });
        //end of playAll
        //shuffleAll
        shuffle.forEach((shuffleBtns) => {
            shuffleBtns.addEventListener("click", () => {
                if(shuffleBtns.style.fill != "orange"){
                    shuffleBtns.style.fill = "orange";
                    function shuffleFunction () {
                        let count = Math.floor(Math.random() * videoSourcesArray.length);
                        video.src = videoSourcesArray[count].src;
                        videoName.innerHTML = videoNamesArray[count];
                        videoPlayer.classList.add("showVideoPlayerJS");
                        movedown.classList.remove("movedownShowJS");
                        videoPlayer.classList.remove("videoPlayerSlideDownJS");
                        video.volume = volumeSlider.value;
                        playVideo();
                    }
                    shuffleFunction();
                    video.addEventListener("ended", () => {
                        count++;
                        video.src = videoSourcesArray[count].src;
                        videoPlayer.classList.add("showVideoPlayerJS");
                        videoName.innerHTML = videoNamesArray[count];
                        movedown.classList.remove("movedownShowJS");
                        videoPlayer.classList.remove("videoPlayerSlideDownJS");
                        video.volume = volumeSlider.value;
                        playVideo();    
                    });
                } else {
                    shuffleBtns.style.fill = "white";
                }
                next.addEventListener("click", () => {
                    shuffleFunction();
                });
                previous.addEventListener("click", () => {
                    shuffleFunction();
                });
                
            });
        });
        //end
    });
});
download.addEventListener("click", () => {
    let link = document.createElement("a");
    link.setAttribute("download", "");
    link.target = "_blank";
    link.href = movieURL.value;
    link.click();
})
threeDotsMenu.addEventListener("click", () => {
    if(threeDotsMenu.style.fill != "orange") {
        threeDotsMenu.style.fill = "orange";
    } else {
        threeDotsMenu.style.fill = "white";
    }
    controlsMenu.classList.toggle("showControlsMenuJS");
    loop.classList.toggle("otherControlsNotShownJS");
    reset.classList.toggle("otherControlsNotShownJS");
    backward15.classList.toggle("otherControlsNotShownJS");
    forward15.classList.toggle("otherControlsNotShownJS");
    volumeContainer.classList.toggle("otherControlsNotShownJS");
    fullScreen.classList.toggle("otherControlsNotShownJS");
    PictureInPicture.classList.toggle("otherControlsNotShownJS");
});
video.addEventListener("mouseenter", () => {
    setTimeout(() => {
        video.style.cursor = "none";
        playbackControls.classList.add("playbackControlsShowJS");
        videoName.classList.add("videoNameNotShowJS");
        if(document.fullscreenElement){
            closeAndDown.classList.add("closeAndDownDisappearJS");
        }
    }, 3000);

})
video.addEventListener("mousemove", () => {
    clearTimeout();
    video.style.cursor = "default";
    playbackControls.classList.add("playbackControlsShowJS");
    videoName.classList.remove("videoNameNotShowJS");
    if(document.fullscreenElement){
        closeAndDown.classList.remove("closeAndDownDisappearJS");
    }
    setTimeout(() => {
        video.style.cursor = "none";
        playbackControls.classList.remove("playbackControlsShowJS");
        videoName.classList.add("videoNameNotShowJS");
        if(document.fullscreenElement){
            closeAndDown.classList.add("closeAndDownDisappearJS");
        }
    }, 3000);
});
fullScreen.addEventListener("click", () => {
    if(document.fullscreenElement){
        document.exitFullscreen();
        fullScreenPath.setAttribute("d", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z");
        video.classList.remove("videoFullScreenJS");  
        playbackControls.classList.remove("playbackControlsDisappearBackground");  
        video.style.boxShadow = "none";
        closeAndDown.classList.remove("closeAndDownDisappearJS");
    } else {
        document.documentElement.requestFullscreen();
        fullScreenPath.setAttribute("d", "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z");
        video.classList.add("videoFullScreenJS");
        playbackControls.classList.add("playbackControlsDisappearBackground");
        video.style.boxShadow = "0 0 0 20px black";
    }
});
PictureInPicture.addEventListener("click", () => {
    if(document.pictureInPictureElement){
        document.exitPictureInPicture();
        PictureInPicturePath.setAttribute("d", "M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z");
        PictureInPicture.style.fill = "white";
        closeAndDown.classList.remove("closeAndDownDisappearJS");
    } else {
        video.requestPictureInPicture();
        document.exitFullscreen();
        fullScreenPath.setAttribute("d", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z");
        video.classList.remove("videoFullScreenJS");  
        playbackControls.classList.remove("playbackControlsDisappearBackground");  
        video.style.boxShadow = "none";
        PictureInPicturePath.setAttribute("d", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM224 160c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4H120c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z");
        PictureInPicture.style.fill = "orange";
        closeAndDown.classList.remove("closeAndDownDisappearJS");
    }
});
volumeSlider.addEventListener("input", () => {
    video.volume = volumeSlider.value;
});
volumeContainer.addEventListener("mouseover", () => {
    volumeSlider.classList.add("volumeSliderShowJS");
    fullScreen.classList.add("otherControlsNotShownJS");
    PictureInPicture.classList.add("otherControlsNotShownJS");
});
volumeContainer.addEventListener("mouseleave", () => {
    volumeSlider.classList.remove("volumeSliderShowJS");
    fullScreen.classList.remove("otherControlsNotShownJS");
    PictureInPicture.classList.remove("otherControlsNotShownJS");
});
forward15.addEventListener("click", () => {
    video.currentTime += 15;
});
backward15.addEventListener("click", () => {
    video.currentTime -= 15;
});
reset.addEventListener("click", () => {
    video.currentTime = 0;
    video.pause();
});
video.addEventListener("ended", () => {
    playPause.innerHTML = `<path d="M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>`;
});
loop.addEventListener("click", () => {
    if(loop.style.fill != "orange"){
        video.loop = true;
        loop.style.fill = "orange";
    } else {
        video.loop = false;
        loop.style.fill = "white";
    }
});
slow.addEventListener("click", () => {
    video.playbackRate -= 0.1;
})
forward.addEventListener("click", () => {
    video.playbackRate += 0.1;
})
stabilizeSpeed.addEventListener("click", () => {
    video.playbackRate = video.defaultPlaybackRate;
    stabilizeSpeed.style.fill = "rebeccapurple";
    setTimeout(() => {
        stabilizeSpeed.style.fill = "white";
    }, 1000);
});
settings.addEventListener("click", () => {
    settingsScreen.classList.add("settingsScreenShowJS");
});
closeSettingsScreen.addEventListener("click", () => {
    settingsScreen.classList.remove("settingsScreenShowJS");
});
bright.addEventListener("click", () => {
    brightCheck.classList.add("themesBulbShowJS");
    darkCheck.classList.remove("themesBulbShowJS");
    blueBlackCheck.classList.remove("themesBulbShowJS");
    header.classList.add("brightThemeJS");
    sideBar.classList.add("brightThemeJS");
    videoContainer.classList.add("brightThemeJS");
    playlistContainer.classList.add("playlistbackColorBrightThemeJS");
    settingsScreen.classList.add("brightThemeJS")
    videoPlayer.classList.add("brightThemeJS");
    arrow.classList.add("arrowBrightThemeJS");
    profile.classList.add("profileBrightThemeJS");
    playbackIcon.style.fill = "black";
    PlaybackPlayAll.style.fill = "black";
    PlaybackShuffle.style.fill = "black";
    snapchat.style.fill = "rgb(161, 214, 80)";
    closeVideoPlayer.style.fill = "black";
    videoPLayerMoveDown.style.fill = "black";
    header.classList.remove("blueBlackThemeJS");
    sideBar.classList.remove("blueBlackThemeJS");
    videoContainer.classList.remove("blueBlackThemeJS");
    playlistContainer.classList.remove("playlistbackColorBlueBlackThemeJS");
    settingsScreen.classList.remove("blueBlackThemeJS")
    videoPlayer.classList.remove("blueBlackThemeJS");
    logo.src = "images/VideoPlayerLogo11.png";
    enableDisableNightLight.classList.add("toggleBackColorJS");
});
dark.addEventListener("click", () => {
    darkCheck.classList.add("themesBulbShowJS");
    brightCheck.classList.remove("themesBulbShowJS");
    blueBlackCheck.classList.remove("themesBulbShowJS");
    header.classList.remove("brightThemeJS");
    sideBar.classList.remove("brightThemeJS");
    videoContainer.classList.remove("blueBlackThemeJS");
    playlistContainer.classList.remove("playlistbackColorBrightThemeJS");
    settingsScreen.classList.remove("brightThemeJS")
    videoPlayer.classList.remove("brightThemeJS");
    videoContainer.classList.remove("brightThemeJS");
    arrow.classList.remove("arrowBrightThemeJS");
    profile.classList.remove("profileBrightThemeJS");
    header.classList.remove("blueBlackThemeJS");
    sideBar.classList.remove("blueBlackThemeJS");
    playlistContainer.classList.remove("playlistbackColorBlueBlackThemeJS");
    settingsScreen.classList.remove("blueBlackThemeJS")
    videoPlayer.classList.remove("blueBlackThemeJS");
    playbackIcon.style.fill = "white";
    PlaybackPlayAll.style.fill = "white";
    PlaybackShuffle.style.fill = "white";
    snapchat.style.fill = "yellow";
    closeVideoPlayer.style.fill = "grey";
    videoPLayerMoveDown.style.fill = "grey";
    logo.src = "images/VideoPlayerLogo12.png";
    enableDisableNightLight.classList.remove("toggleBackColorJS");
});
blueBlack.addEventListener("click", () => {
    blueBlackCheck.classList.add("themesBulbShowJS");
    brightCheck.classList.remove("themesBulbShowJS");
    darkCheck.classList.remove("themesBulbShowJS");
    header.classList.add("blueBlackThemeJS");
    sideBar.classList.add("blueBlackThemeJS");
    videoContainer.classList.add("blueBlackThemeJS");
    playlistContainer.classList.add("playlistbackColorBlueBlackThemeJS");
    settingsScreen.classList.add("blueBlackThemeJS")
    videoPlayer.classList.add("blueBlackThemeJS");
    arrow.classList.remove("arrowBrightThemeJS");
    profile.classList.remove("profileBrightThemeJS");
    header.classList.remove("brightThemeJS");
    sideBar.classList.remove("brightThemeJS");
    videoContainer.classList.remove("brightThemeJS");
    playlistContainer.classList.remove("playlistbackColorBrightThemeJS");
    settingsScreen.classList.remove("brightThemeJS")
    videoPlayer.classList.remove("brightThemeJS");
    playbackIcon.style.fill = "white";
    PlaybackPlayAll.style.fill = "white";
    PlaybackShuffle.style.fill = "white";
    snapchat.style.fill = "yellow";
    closeVideoPlayer.style.fill = "white";
    videoPLayerMoveDown.style.fill = "white";
    logo.src = "images/VideoPlayerLogo12.png";
    enableDisableNightLight.classList.remove("toggleBackColorJS");
});
enableDisableNightLight.addEventListener("click", () => {
    NightLightOverlay.classList.toggle("NightLightOverlayShowJS");
    intensitySet.classList.toggle("intensitySetShowJS");
    if(label.innerText === "Disabled"){
        label.innerText = "Enabled";
    } else {
        label.innerHTML = "Disabled";
    }
});
intensityBar.addEventListener("input", () => {
    NightLightOverlay.style.opacity = intensityBar.value;
});