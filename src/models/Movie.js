export class Movie {
  constructor (data) {
    this.id = data.id
    this.lowQualityBackdropImgUrl = 'https://image.tmdb.org/t/p/w500' + data.backdrop_path
    this.lowQualityPosterImgUrl = 'https://image.tmdb.org/t/p/w500' + data.poster_path
    this.highQualityBackdropImgUrl = 'https://image.tmdb.org/t/p/original' + data.backdrop_path
    this.highQualityPosterImgUrl = 'https://image.tmdb.org/t/p/original' + data.poster_path
    this.originalLanguage = data.original_language
    this.title = data.title
    this.originalTitle = data.original_title
    this.overview = data.overview
    this.voteAverage = Math.round(data.vote_average)
    this.releaseDate = new Date(data.release_date)
  }
}

const movieData = {
  "adult": false,
  "backdrop_path": "/meyhnvssZOPPjud4F1CjOb4snET.jpg",
  "genre_ids": [
    16,
    28,
    12,
    35,
    10751
  ],
  "id": 940551,
  "original_language": "en",
  "original_title": "Migration",
  "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
  "popularity": 1063.373,
  "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
  "release_date": "2023-12-06",
  "title": "Migration",
  "video": false,
  "vote_average": 7.622,
  "vote_count": 779
}