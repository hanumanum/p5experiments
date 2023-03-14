const direction = document.location.host === "hanumanum.github.io" ? "/p5experiments/" : "";

const pages = [
    {
        url: "art-cardioid",
    },
    {
        url: "art-noize-rotating-fans",
    }
    ,
    {
        url: "art-constalation",
    }
    ,
    {
        url: "art-flower-of-life",
    },
    {
        url: "art-arcs",
    },
    {
        url: "art-arrows",
    },
    {
        url: "art-artificial-alphabets"
    },
    {
        url: "art-graph"
    },
    {
        url: "art-infection"
    },
    {
        url: "art-letter-flower"
    }
    ,
    {
        url: "art-letter-flowers"
    }
    ,
    {
        url: "art-oscilating-squares"
    }
    ,
    {
        url: "art-particles"
    }
    ,
    {
        url: "art-light-propagation"
    }
    ,
    {
        url: "art-psy-rect-blanding-modes"
    }
    ,
    {
        url: "art-text-circle-packing-edges"
    }
    ,
    {
        url: "art-text-entropy"
    }
    ,
    {
        url: "art-text-flow-fields"
    }
    /*
    {
        url: "art-floating-points"
    }*/

]


const findCurrentIndex = () => {

    const slug = document.location.pathname.split("/").filter((e) => e !== "").pop();
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].url === slug) {
            return i;
        }
    }
    return -1;
}


window.onload = () => {
    const currentIndex = findCurrentIndex();
    if (currentIndex === -1) return
    if (currentIndex > 0) {
        const prev = document.createElement("div");
        prev.id = "go-prev";
        prev.innerHTML = "prev";
        prev.onclick = () => {
            document.location.assign(direction + "/" + pages[currentIndex - 1].url);
        }

        document.body.appendChild(prev);
    }


    if (currentIndex < pages.length - 1) {

        const next = document.createElement("div");

        next.id = "go-next";
        next.innerHTML = "next";
        next.onclick = () => {
            console.log(pages[currentIndex + 1]);
            document.location.assign(direction + "/" + pages[currentIndex + 1].url);
        }

        document.body.appendChild(next);
    }

}


