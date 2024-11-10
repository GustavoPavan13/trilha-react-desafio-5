//biblioteca utilizada para fazer requisições HTTP  
import axios from 'axios';

export const api  = axios.create({
    //url base da api
    baseURL: 'https://okdpdhkcohsfwyegfshz.supabase.co/rest/v1',
    headers: {
         apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rZHBkaGtjb2hzZnd5ZWdmc2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyMDY3ODEsImV4cCI6MjA0Njc4Mjc4MX0.ayLNjaW4vDSxuwlNuZXnh6PaLhRb58U-2h6VFquEXJ0",
         authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rZHBkaGtjb2hzZnd5ZWdmc2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyMDY3ODEsImV4cCI6MjA0Njc4Mjc4MX0.ayLNjaW4vDSxuwlNuZXnh6PaLhRb58U-2h6VFquEXJ0",
    }
})