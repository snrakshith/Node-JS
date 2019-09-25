/*
    We have some additional Properties for,
    
    String:
        - lowercase : true,
        - uppercase : true,
        - trim : true
    
    Number:

    - get: v=> Math.round(v),
        Price is taken from the MongoDB Database and then updated,
        if the Price was already existing

    - set: v=> Math.round(v)
        Used if the Price, is 15.6

*/
