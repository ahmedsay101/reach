import React, { useEffect, useState } from 'react';
import "./searchResults.scss";
import axios from "axios";
import {useSearchParams} from "react-router-dom";
import LoadingBar from '../../components/LoadingBar/loadingBar';
import Result from '../../components/Result/result';

function SearchResults() {

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [items, setItems] = useState<any[]>([]);
  const [count, setCount] = useState(null);


  useEffect(() => {
    if(keyword) search(keyword);
  }, [keyword]);

  const search = async (term: string) => {
    try {
      const apiKey = "AIzaSyCPe04CKq7uNwl8VtKISGcCfWEYy-X7qEU";
      const maxResults = 25;

      setLoadingProgress(20);
      const data = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${term}&key=${apiKey}`,
      {
        onDownloadProgress: progressEvent => {
          //let percentageCompleted = (progressEvent.loaded * 100) / progressEvent.total;
          setLoadingProgress(p => p += 10);
      }});

      if(data) {
        setLoadingProgress(100);
        setCount(data.data.pageInfo.totalResults);
        setItems(data.data.items);
        console.log(data);
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    keyword ?
    <>
      {loadingProgress > 0 ? <LoadingBar percentage={loadingProgress} destroy={() => setLoadingProgress(0)} /> : null}
      <div className='search-results-container'>
        <div className='search-results'>
          {count &&<div className="results-info">
            <span className="count">About {count} Filtered Results</span>
          </div>}
          {items.length < 1 && keyword && loadingProgress === 0 ? <span className='no-results'>No Results Found For {keyword}</span> : items.map(item => <Result type={item.id.kind} data={item.snippet}/>)}
        </div>
      </div>
    </> : <div className="no-term">Please Enter A Valid Search Term</div>
  );
}

export default SearchResults;