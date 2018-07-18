//Object literal No.4
var fruits = [
  {
    name: 'grape',
    brand: 'anthony',
    price:  9,
    image: 'https://cdn.andnowuknow.com/thumbnails/jacks_salute-av.jpg?VyojOfvaR2ZvXIWfRS.wtPXdeJMeYdjs'
  },
  {
    name: 'orange',
    brand: 'sunworld',
    price: 2,
    image: 'https://cdn.andnowuknow.com/thumbnails/jacks_salute-av.jpg?VyojOfvaR2ZvXIWfRS.wtPXdeJMeYdjs'
  },
  {
    name: 'kiwi',
    brand: 'golden boy',
    price: 5,
    image: 'https://indigenousbartender.files.wordpress.com/2018/04/kiwifruit-the-chinese-gooseberry.jpeg?w=1400'
  }
]

// No.6
for(var i = 0; i < fruits.length; i++) {
  console.log(fruits[i].price * 2)
};


//object Construction
function Veg(name, brand, price, image) {
 this.name = name
 this.brand = brand
 this.price = price
 this.image = image
}


//No.5
var celery = new Veg('celery', 'summer pole', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVDx0vTW5pidlKhaBMJrZmjB2WWWxef5KOxCIFQ6Sf47jfILt')
var carrot = new Veg('carrot', 'mr.orange', 2, 'https://cdn3.volusion.com/jhaxp.fvhcn/v/vspfiles/photos/CARSN-2.jpg')
var lettuce = new Veg('lettuce', 'green filed', 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVIAVEicaZALutwZsze27C8f_s9NfzFbdIa4fu5tt139vZdwhdcA')
var broccoli = new Veg('broccoli', 'big head', 8, 'https://i5.walmartimages.ca/images/Large/787/433/6000194787433.jpg?odnBound=460')

//No.7
Veg.prototype.getFullName = function() {
  return this.brand + ' ' + this.name;
}
  console.log(celery.getFullName())
