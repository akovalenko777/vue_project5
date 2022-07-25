/*
mongodb+srv://akovalenko777:<password>@cluster0.doylz.mongodb.net/?retryWrites=true&w=majority

https://data.mongodb-api.com/app/data-sypev/endpoint/data/v1

API KEY tasks
NFnFpg5LCWjJEPXDIgW9CA7o3AQzMo1mOKAcoy3wfWDvjQdVW01qtx9BqTyil5Yv

akovalenko777
tHeqNU1TGDPkzRd1

*/
import {DB_API_KEY, DB_NAME, DB_SOURCE} from '../db-config';
import Base64 from 'crypto-js/enc-base64';
const DB_API_URL = 'https://data.mongodb-api.com/app/data-sypev/endpoint/data/v1';

const axios = require('axios');

export const insert = async (collection, insertData) => {
    const data = JSON.stringify({
        "collection": collection,
        "database": DB_NAME,
        "dataSource": DB_SOURCE,
        "document": insertData
    });
    return await axios({
        method: 'post',
        url: DB_API_URL+'/action/insertOne',
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Request-Headers': '*',
          // 'api-key': DB_API_KEY,
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE,OPTIONS',
          'Authorization': 'Basic YWtvdmFsZW5rbzc3Nzp0SGVxTlUxVEdEUGt6UmQx'
        },
        data: data
    })
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            return response.data
        })
        .catch(function (error) {
            // console.log(error);
        });
}

