export const getWishlist = () => {
  return JSON.parse(localStorage.getItem('movieWishlist')) || [];
};

export const toggleWishlist = (movie) => {
  const wishlist = getWishlist();
  const index = wishlist.findIndex((m) => m.id === movie.id);

  if (index === -1) {
    wishlist.push(movie);
  } else {
    wishlist.splice(index, 1);
  }

  localStorage.setItem('movieWishlist', JSON.stringify(wishlist));
};
