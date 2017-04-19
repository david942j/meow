(function(){
  var imgs = [
    'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
    'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg',
    'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg',
    'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
    'https://images.pexels.com/photos/8923/pexels-photo.jpg',
    'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg',
    'https://images.pexels.com/photos/203333/pexels-photo-203333.jpeg',
    'https://images.pexels.com/photos/209800/pexels-photo-209800.jpeg',
    'https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg',
    'https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg',
    'https://images.pexels.com/photos/160755/kittens-cats-foster-playing-160755.jpeg',
    'https://images.pexels.com/photos/13937/pexels-photo-13937.jpeg',
    'https://images.pexels.com/photos/85126/cat-kitten-kitty-animal-85126.jpeg',
    'https://images.pexels.com/photos/105376/pexels-photo-105376.jpeg',
    'https://images.pexels.com/photos/157820/pexels-photo-157820.jpeg',
    'https://images.pexels.com/photos/113766/pexels-photo-113766.jpeg',
    'https://images.pexels.com/photos/209069/pexels-photo-209069.jpeg',
    'https://images.pexels.com/photos/65006/pexels-photo-65006.jpeg',
    'https://images.pexels.com/photos/86243/pexels-photo-86243.jpeg',
  ];
  var images = document.getElementsByTagName('img');
  for(var i = 0; i < images.length; i++) {
    image = images[i];
    image.style.width = image.offsetWidth + 'px';
    image.style.height = image.offsetHeight + 'px';
    image.srcset = '';
    image.src = imgs[Math.floor(Math.random() * imgs.length)];
  }
})();
