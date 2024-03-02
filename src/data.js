export const API_KEY = 'AIzaSyA2MU3L9Q2lHZf5_fq_S1S9i_bDYk42hQE';

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}