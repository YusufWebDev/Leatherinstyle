export function load(){
    const logo = {url:"Logo.png", alt:"Leather in Style Logo"}
    const images = [
        {url:"1.jpg", alt:"image of a leather bag"},
        {url:"2.jpg", alt:"image of a leather bag"},
        {url:"3.jpg", alt:"image of a leather bag"},
        {url:"4.jpg", alt:"image of a leather bag"},
        {url:"5.jpg", alt:"image of a leather bag"},
        {url:"6.jpg", alt:"image of a leather bag"},
        {url:"7.jpg", alt:"image of a leather bag"},
        {url:"8.jpg", alt:"image of a leather bag"},
        {url:"9.jpg", alt:"image of a leather bag"},
        {url:"10.jpg", alt:"image of a leather bag"},        
    ];

    return{
        images,
        baseURL: "https://ik.imagekit.io/YusufWebDev/Leather_in_Style/",
        logo
    }
}