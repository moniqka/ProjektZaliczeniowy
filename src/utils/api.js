const API_KEY = 'k_ty5rk4gi';

export async function getData(searchTerm = '') {
  const res = await fetch( `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${searchTerm}`);
  // if (res.status !== 200) throw new Error(errorDescription[res.status]);
  const data = await res.json();
  return data;
};

export async function getYTData(id = '') {
  const res = await fetch( `https://imdb-api.com/en/API/YouTubeTrailer/${API_KEY}/${id}`);
  // if (res.status !== 200) throw new Error(errorDescription[res.status]);
  const data = await res.json();
  return data;
};