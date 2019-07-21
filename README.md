# streaming-search-project
This app is simple. Choose your streaming services (Netflix, Amazon Prime, Google Play, iTunes); input a movie or TV show; get your show information and where you can stream it. The streaming data comes from the Utelly API, and the show information comes from the TMDb API. You can register an account to save your streaming services. This is built in React and uses FireBase for user authentication and MongoDB to store user data such as streaming preferences.

# Responsibilities
I made the Utelly API calls to get the streaming information for a movie or TV show. With that information, I added hyperlinks to the streaming website where you can view the show. I also added radio buttons for Movie or TV Show in order to make the API call to The Movie Datbase to get the show information. The most important thing I did was render multiple results based on the number of results Utelly API returned and the selected streaming services.
