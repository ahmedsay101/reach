import React, { useEffect } from 'react';
import "./searchResults.scss";
import axios from "axios";
import {useSearchParams} from "react-router-dom";

function SearchResults() {

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    try {
      const apiKey = "AIzaSyAN1eI2FmyWsIzlOj-JpvA8sbzI-EnF3gE";
      const maxResults = 25;
      const keyword = searchParams.get("keyword");

      const data = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${keyword}&key=${apiKey}`,
      {
        onDownloadProgress: progressEvent => {
          console.log(progressEvent);
          let percentageCompleted = (progressEvent.loaded * 100) / progressEvent.total;
          console.log(percentageCompleted);
      }});

    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>search</div>
    </>
  );
}

export default SearchResults;