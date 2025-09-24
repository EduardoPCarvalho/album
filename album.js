new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: false,
      items: [
        {
          img1: "images/gatodormindo3.jpg",
          img2: "images/gatodormindo2.jpg",
          img3: "images/gatodormindo1.jpg",
          title: "DORMINDO",
          isOpen: false,
        },
        {
          img1: "images/eueele1.jpg",
          img2: "images/eueele2.jpg",
          img3: "images/eueele3.jpg",
          title: "EU E ELE",
          isOpen: false,
        },
        {
          img1: "images/conceitual2.png",
          img2: "images/conceitual1.jpg",
          img3: "images/conceitual3.jpg",
          title: "CONCEITUAL",
          isOpen: false,
        },
        {
          img1: "images/careta3.jpg",
          img2: "images/careta1.jpg",
          img3: "images/careta2.jpg",
          title: "CARETA",
          isOpen: false,
        },
        {
          img1: "images/foradecontexto2.jpg",
          img2: "images/foradecontexto1.jpg",
          img3: "images/foradecontexto3.jpg",
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
