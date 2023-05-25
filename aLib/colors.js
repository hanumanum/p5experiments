const PALLETTE_1 = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
const PALLETTE_2 = ["#fd00ff", "#fdff00", "#00ff38", "#00f9ff", "#3c00ff"]

//https://openprocessing.org/sketch/1518376
const PALLETTES = {
    "rainbow": ["#531253", "#9a5de5", "#ec5bb3", "#29f0b6", "#57b576", "#3131d1", "#090584", "#171773", "#3965f5", "#238cf4", "#34bbfb", "#ec5d19", "#ef8311", "#FFC21F", "#e8ff81"],
    "fullrainbow": ["#ff0000", "#ff8700", "#ffd300", "#deff0a", "#a1ff0a", "#0aff99", "#0aefff", "#147df5", "#580aff", "#be0aff"],
    "orangebrown": ["#fe5b14", "#ff9831", "#cec8b8", "#222", "#53372a"],
    "orangebluebrown": ["#fe5b14", "#ff9831", "#3131d1", "#34bbfb", "#53372a"], // "#cec8b8",
    "blueorange": ["#3d348b", "#7678ed", "#f7b801", "#f18701", "#f35b04"],
    "sunset": ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"],
    "neorustic": ["#d7263d", "#f46036", "#2e294e", "#1b998b", "#c5d86d"],
    "pastel": ["#9a5de5", "#ec5bb3", "#fce439", "#34bbfb", "#40f5d6"],
    "genuary": ["#2E294E", "#541388", "#F1E9DA", "#FFD400", "#D90368"],
    "purplegreenyellow": ["#29f0b6", "#6f1161", "#fecd28", "#fb8c8c", "#fa901e", "#abffed"],
    "turquoisegray": ["#00b0c5", "#09E8DE", "#dddfe3", "#808080", "#5E5E5E"],
    "greengray": ["#08b233", "#a1ff0a", "#dddfe3", "#808080", "#5E5E5E"],
    "green": ["#57b576", "#08b233", "#a1ff0a", "#808080", "#5E5E5E"],
    "cyber": ["#E36397", "#db6800", "#e8ff81", "#29f0b6", "#531253", "#938ba1", "#ea3788"],
    "mycustom1" : ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"],
    "mycustom2" : ["#fd00ff", "#fdff00", "#00ff38", "#00f9ff", "#3c00ff"]
}


function getRandomColor() {
    const colors = ["#FFEB00", "#FC0019", "#01FF4F", "#FF01D7", "#5600CC", "#00EDF5"]
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomColorV2() {
    const colors = ["#fd00ff", "#fdff00", "#00ff38", "#00f9ff", "#3c00ff"]
    return colors[Math.floor(Math.random() * colors.length)];
}