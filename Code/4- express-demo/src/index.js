const express = require("express");
const app = express();

// app.get();
// app.put();
// app.delete();
// app.post();

/*--------------------------------------------------------*/
// To acess the Route of the Website
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

/*--------------------------------------------------------*/
/*
    Uses,
        Route Parameter's ('/api/courses') are mainly provide nessacery information to 
        navigate across the website.
*/
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

/*--------------------------------------------------------*/
/*
Route Parameter's ie., /api/courses/1
    <:name of the parameter>, it can be anything.. 
    ex-> :id here the parameter name is ID
    ex-> :courseID here the parameter name is courseID

And a second parameter is a Route Handler Function (req,res),
  which is a callback function.
*/
app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params);
});

/*--------------------------------------------------------*/
/*
To Handle Multiple Route Parameter's 
    ex:   '/api/posts/:month/:date'
    ex:   '/api/posts/2018/6'
    ex:    res.send(req.params); Returns object type of `KEY : VALUE` pair. 
    ex:    res.send(req.params.year); Returns Just Year
*/
app.get("/api/posts/:year/:month", (req, res) => {
  //res.send(req.params.year);
  res.send(req.params);
});

/*--------------------------------------------------------*/

/*
Query String Parameter's 
    Synatax: They start with `?<query-string-parameter>`,
    they are used to provide additional information to the Backend Services
    they are optional for usage,
    and they are stored in an object with an `KEY : VALUE` pair.
    ex: http://localhost:5000/api/posts/2018/6?sortBy=name
*/

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});

/*--------------------------------------------------------*/
/*
    For an static usage we can just set an Hard Coded PORT NUMBER,
    i.e.,
         app.listen(3000, () => console.log('Listening on port 3000..'));

    We use Environment variable to set the Port Number dynamically,bcz 
    in production the environment variable is set by the Domain Hosting Environment.

    Synatax used => ` process.env.PORT ` or ` <any-number> `
    
    In order to set a Dynamic Port Explicitly by us,
        In Windows:     `set PORT = 5000` <some_number>
        In Mac:         `export PORT = 5000` <some_number>
*/

const port = process.env.PORT || 3000;
// Uses default Port 3000
app.listen(port, () => console.log(`Listening on port ${port}..`));
