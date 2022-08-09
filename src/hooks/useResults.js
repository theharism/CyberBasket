import React,{useState,useEffect} from 'react'
import yelp from '../Api/Yelp';

export default (terms) => {
  
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const SearchApi = async (terms) => {

        console.log('Api Called');
        try{
        const response = await yelp.get('',{
            params:{
               name:terms
            }
        });
        setResults(response.data.data);
        console.log(results);
        } catch(err)
        {
          setErrorMessage('Something went wrong');
        }
    };

    useEffect(()=>{SearchApi(terms)},[terms]) 
  
  
  return [SearchApi,results,errorMessage];
}