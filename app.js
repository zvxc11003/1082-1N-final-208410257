const demoList = document.getElementById("demo-list");
const demo = document.getElementById("demo");

class ClassDemo {
  constructor(id, title, imageUrl, description, handlerCode) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.handlerCode = handlerCode;
  }
}

class ClassDemoItem {
  constructor(classDemo) {
    this.classDemo = classDemo;
  }

  render() {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="card">
       
    <div class="image">
       <img src="${this.classDemo.imageUrl}">
    </div>
    <div class="title">
     <h1>
       <span style="font-weight:bold;">${this.classDemo.title}</span></h1>
    </div>
    <div class="des">
     <h1>
       <span style="font-weight:bold;">${this.classDemo.description}</span></h1>
       <button><a href="${this.classDemo.handlerCode}">GO</a></button>
       <button>EDIT</button>
       <button><a onclick="deleteDemo(${this.classDemo.id})"> DELETE</a>
        </div>

    </div>
    `;
    return card;
  }
}

class ClassDemoList {
  demos = [
    new ClassDemo(
      1,
      "Unconventional Calculator",
      "img/1.jpg",
      "學習基本函式呼叫",
      "calculator/index.html"
    ),
    new ClassDemo(
      2,
      "Monster Killer",
      "img/2.jpg",
      "製作小遊戲精熟函式的應用",
      "monster/index.html"
    ),
    new ClassDemo(
      3,
      "DOM Movie",
      "img/5.jpg",
      "新增物件到網頁中",
      "DOM Movie Project/index.html"
    ),
    new ClassDemo(
      4,
      "Music Player",
      "img/3.jpg",
      "製作音樂播放器",
      "music player/index.html"
    ),
    new ClassDemo(
      5,
      "Video Player",
      "img/4.jpg",
      "製作影片播放器",
      "video player/index.html"
    ),
  ];

  constructor() {}

  render() {
    const header = document.createElement("h1");
    header.id = "mid-heading";
    // header.ClassList = 'visible';
    header.innerHTML = `<span style="color:	#02F78E; 
    font-size: 40px;">
    JAVA SCRIPT FINAL</span>
    `;
    demoList.append(header);
    const cardList = document.createElement("div");
    cardList.id = "mid-card-list";
    for (const item of this.demos) {
      const demoItem = new ClassDemoItem(item);
      const demoEl = demoItem.render();
      cardList.append(demoEl);
    }
    demoList.append(cardList);
  }
}
const classDemoList = new ClassDemoList();
console.log(ClassDemoList);
classDemoList.render();

const showDemoList = (item) => {
  demoList.classList = "visible";
  demo.classList = "invisible";
};

const showDemo = (srcUrl) => {
  demoList.classList = "invisible";
  demo.classList = "visible";
  demo.style.marginTop = "100px";
  demo.innerHTML = `
  <iframe src="${srcUrl}" height="900px" width=100%></iframe>
  `;
};

const deleteDemo = (id) => {
  // console.log('delete 1', classDemoList);
  classDemoList.demos.forEach((item, i) => {
    if (item.id == id) classDemoList.demos.splice(i, 1);
  });
  demoList.innerHTML = "";
  classDemoList.render();
};
