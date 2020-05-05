import React, {useEffect} from 'react';
import axios from 'axios';

export default function InstgramFeed() {

  useEffect(()=>{

    async function getInstagramData() {
      const result = await axios.get('/api/instagram');
      console.log('result:',result.data);
    }

    getInstagramData();
    
  },[]);

  return (
    <div>

    </div>
  )
}