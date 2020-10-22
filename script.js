const links = [
  {
    name: "yt.b/",
    icon: "youtube",
    bg: "#f3000f",
    color: "white",
    
    url: "https://www.youtube.com"
  },
  {
    name: "gg.l/",
    icon: "google",
    bg: "#109855",
    color: "white",
    url: "https://www.google.com"
  },
  {
    name: "rd.t/",
    icon: "reddit",
    bg: "#f63100",
    color: "white",
    url: "https://www.reddit.com"
  },
  {
    name: "m.me/",
    icon: "facebook-messenger",
    bg: "#0076fe",
    color: "white",
    url: "https://m.me"
  },
   {
    name: "g.hub/",
    icon: "github",
    bg: "#e8e6e3",
    color: "black",
    url: "https://m.me"
  }
];
const _ = el => {return document.querySelector(el)};
const __ = el => {return document.querySelector(el)};
const UI = (parent , bg, text_color , logo , txt, url) => {
  const box = document.createElement("div");
  const ico = document.createElement("i");
  const text = document.createElement("strong");
  const a = document.createElement("a");
  box.style.color = text_color;
  a.setAttribute("href" , url);
  a.appendChild(box);
  ico.className = `fab fa-${logo}`;
  box.className = 'link-box';
  box.style.background = bg;
  text.innerText = txt;
  box.appendChild(ico);
  box.appendChild(text);
  parent.appendChild(a);
}
const cont = _(".link-container");

for(link of links)
  UI(cont , link.bg , link.color, link.icon , link.name , link.url);
