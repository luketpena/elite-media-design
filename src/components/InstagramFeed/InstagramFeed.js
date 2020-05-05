import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  height: max-content;
  text-align: center;
  .text {
    margin: 0 auto 50px auto;
    display: block;
  }
  .biography {
    font-family: monospace;
  }
`;

const ProfileImage = styled.img`
  border-radius: 16px;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  display: block;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: vertical;
  flex-wrap: wrap;
  position: relative;
  overflow-y: scroll;
  height: 80vh;
  border-radius: 50px 0 0 50px;

`;

const GalleryCard = styled.img`
  max-height: 220px;
  flex-grow: 8;
  width: 220px;
  position: relative;
  overflow: hidden;
  object-fit: cover;

  &:first-child, &:nth-child(5n) {
    min-width: 50%;
    @media(max-width: 320px) {
      min-width: 100%;
    }
  }
  &:nth-child(3n) {
    flex-grow: 1;
  }
`;


export default function InstgramFeed() {

  let [data, setData] = useState({});

  useEffect(()=>{
    async function getInstagramData() {
      const result = await axios.get('/api/instagram');
      await setData(result.data);
      return result;
    }
    getInstagramData();  
  },[]);

  function renderAccountTitle() {
    return (
      <>
        {(data.profile_pic_url_hd? <ProfileImage src={data.profile_pic_url_hd} alt={`The Instagram profile image for ${data.full_name}`}/> : <></>)}
        {(data.biography? <p className="text biography">{data.biography}</p> : <></>)}
      </>
    )
  }

  function renderGallery() {
    if (data && data.edge_owner_to_timeline_media && data.edge_owner_to_timeline_media.edges) {
      let galleryArray = [];
      
      for (var i=0; i<10; i++) {
        galleryArray.push(data.edge_owner_to_timeline_media.edges[i].node);
      }

      let finishedGallery = galleryArray.map( (edge,i)=>{
        console.log('url:',edge);
        
        return <GalleryCard key={i} src={edge.display_url} alt={edge.title}/>
      });
      console.log(finishedGallery);
      return finishedGallery;
      
    }   
  }

  return (
    <Container>
      <h2>Social Media</h2>
      <p className="text">Social media can be complicated, and that's why we're here to help. Take a look at this live feed from an account we helped set up.</p>
      {renderAccountTitle()}
      <Gallery>
        {renderGallery()}
      </Gallery>
    </Container>
  )
}