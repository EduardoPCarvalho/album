new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: false,
      items: [
        {
          img1: "images/dormindoani1.png",
          img2: "images/dormindoani2.jpg",
          img3: "images/dormindoani3.png",
          title: "DORMINDO",
          isOpen: false,
        },
        {
          img1: "images/eueeleani4.png",
          img2: "images/eueeleani2.jpg",
          img3: "images/eueeleani3.png",
          title: "EU E ELE",
          isOpen: false,
        },
        {
          img1: "images/conceitualani2.png",
          img2: "images/conceitualani3.jpg",
          img3: "images/conceitualani1.png",
          title: "CONCEITUAL",
          isOpen: false,
        },
        {
          img1: "images/caretaani5.png",
          img2: "images/caretaani1.png",
          img3: "images/caretaani3.jpg",
          title: "CARETA",
          isOpen: false,
        },
        {
          img1: "images/foradecontextoani3.png",
          img2: "images/foradecontextoani2.png",
          img3: "images/foradecontextoani1.png",
          title: "?",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
