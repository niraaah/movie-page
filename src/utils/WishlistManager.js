export const toggleWishlist = (movie) => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const exists = wishlist.find((item) => item.id === movie.id);

  if (exists) {
    const updated = wishlist.filter((item) => item.id !== movie.id);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  } else {
    wishlist.push(movie);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }
};

export const getWishlist = () => {
  return JSON.parse(localStorage.getItem('wishlist')) || [];
};
