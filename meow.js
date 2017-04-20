(function(){
  var imgs = [
    'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
    'https://images.pexels.com/photos/105376/pexels-photo-105376.jpeg',
    'https://images.pexels.com/photos/113766/pexels-photo-113766.jpeg',
    'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
    'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg',
    'https://images.pexels.com/photos/13937/pexels-photo-13937.jpeg',
    'https://images.pexels.com/photos/157820/pexels-photo-157820.jpeg',
    'https://images.pexels.com/photos/160196/pexels-photo-160196.jpeg',
    'https://images.pexels.com/photos/160755/kittens-cats-foster-playing-160755.jpeg',
    'https://images.pexels.com/photos/160839/cat-animal-love-pet-160839.jpeg',
    'https://images.pexels.com/photos/162146/cat-kitten-pets-tabby-kitten-162146.jpeg',
    'https://images.pexels.com/photos/17773/pexels-photo.jpg',
    'https://images.pexels.com/photos/198269/pexels-photo-198269.jpeg',
    'https://images.pexels.com/photos/203333/pexels-photo-203333.jpeg',
    'https://images.pexels.com/photos/209069/pexels-photo-209069.jpeg',
    'https://images.pexels.com/photos/209800/pexels-photo-209800.jpeg',
    'https://images.pexels.com/photos/219506/pexels-photo-219506.jpeg',
    'https://images.pexels.com/photos/236230/pexels-photo-236230.jpeg',
    'https://images.pexels.com/photos/24104/pexels-photo-24104.jpg',
    'https://images.pexels.com/photos/247007/pexels-photo-247007.jpeg',
    'https://images.pexels.com/photos/315582/pexels-photo-315582.jpeg',
    'https://images.pexels.com/photos/325407/pexels-photo-325407.jpeg',
    'https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg',
    'https://images.pexels.com/photos/37337/cat-silhouette-cats-silhouette-cat-s-eyes.jpg',
    'https://images.pexels.com/photos/39380/cat-feline-kitty-kitten-39380.jpeg',
    'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg',
    'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    'https://images.pexels.com/photos/54632/cat-animal-eyes-grey-54632.jpeg',
    'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg',
    'https://images.pexels.com/photos/60224/pexels-photo-60224.jpeg',
    'https://images.pexels.com/photos/62640/pexels-photo-62640.jpeg',
    'https://images.pexels.com/photos/64147/cat-young-cat-playful-pet-64147.jpeg',
    'https://images.pexels.com/photos/65006/pexels-photo-65006.jpeg',
    'https://images.pexels.com/photos/65008/pexels-photo-65008.jpeg',
    'https://images.pexels.com/photos/70769/pexels-photo-70769.jpeg',
    'https://images.pexels.com/photos/85126/cat-kitten-kitty-animal-85126.jpeg',
    'https://images.pexels.com/photos/86243/pexels-photo-86243.jpeg',
    'https://images.pexels.com/photos/8923/pexels-photo.jpg',
    'https://images.pexels.com/photos/92174/pexels-photo-92174.jpeg',
    'https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg',
    'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg',
    'https://images.pexels.com/photos/97087/pexels-photo-97087.jpeg',
  ];
  var update = function() {
    var images = document.getElementsByTagName('img');
    for(var i = 0; i < images.length; i++) {
      image = images[i];
      if(image.nMeow) continue;
      image.style.width = image.offsetWidth + 'px';
      image.style.height = image.offsetHeight + 'px';
      image.srcset = '';
      image.nMeow = true;
      image.src = imgs[Math.floor(Math.random() * imgs.length)] + '?w=600';
    }
  }
  update();
  setInterval(update, 1000);
})();
