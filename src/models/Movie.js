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

    // NOTE additional details
    this.budget = data.budget || 0
    this.genres = data.genres || []
    this.homepage = data.homepage || ''
    this.tagline = data.tagline || ''
    this.revenue = data.revenue || 0
    this.runtime = data.runtime || 0
  }
}


const detailedMovieData = {
  "adult": false,
  "backdrop_path": "/uUiIGztTrfDhPdAFJpr6m4UBMAd.jpg",
  "belongs_to_collection": null,
  "budget": 80000000,
  "genres": [
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    }
  ],
  "homepage": "https://www.madameweb.movie",
  "id": 634492,
  "imdb_id": "tt11057302",
  "original_language": "en",
  "original_title": "Madame Web",
  "overview": "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
  "popularity": 370.443,
  "poster_path": "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
  "production_companies": [
    {
      "id": 5,
      "logo_path": "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
      "name": "Columbia Pictures",
      "origin_country": "US"
    },
    {
      "id": 435,
      "logo_path": "/AjzK0s2w1GtLfR4hqCjVSYi0Sr8.png",
      "name": "di Bonaventura Pictures",
      "origin_country": "US"
    },
    {
      "id": 7505,
      "logo_path": "/837VMM4wOkODc1idNxGT0KQJlej.png",
      "name": "Marvel Entertainment",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2024-02-14",
  "revenue": 77576774,
  "runtime": 116,
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "Her web connects them all.",
  "title": "Madame Web",
  "video": false,
  "vote_average": 5.401,
  "vote_count": 274
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
