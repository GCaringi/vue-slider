// const images = [
//     {
//         src: 'img/01.jpg',
//         title: 'Svezia',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     },
//     {
//         src: 'img/02.jpg',
//         title: 'Svizzera',
//         text: 'Lorem ipsum',
//     },
//     {
//         src: 'img/03.jpg',
//         title: 'Gran Bretagna',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//         src: 'img/04.jpg',
//         title: 'Germania',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     },
//     {
//         src: 'img/05.jpg',
//         title: 'Paradise',
//         text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     },
// ];


const app = new Vue({
    el: "#app",
    data: {
        currentIndex: 0,
        interval: null,
        images: [
            {
                src: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                src: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                src: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                src: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                src: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            }
        ]
    },
    methods: {
        nextImg(){
            this.currentIndex === this.images.length-1 ? this.currentIndex = 0 : this.currentIndex++;
        },
        prevImg(){
            this.currentIndex === 0 ? this.currentIndex = this.images.length-1 : this.currentIndex--;
        },
        choseImg(index){
            this.currentIndex = index;
        },
        startAutoplay: function(){
            obj = this;
            this.interval = setInterval(function(){
                obj.currentIndex === obj.images.length-1 ? obj.currentIndex = 0 : obj.currentIndex++;
            },1000);
        },
        stopAutoplay: function(){
            clearInterval(this.interval);

        }
    },
    mounted() {
        this.startAutoplay();
    }
})
