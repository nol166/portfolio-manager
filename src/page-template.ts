export const generatePage = (name: string, githubName: string) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous">
      <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/grids-responsive-min.css">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
    <div class="pure-g">
      <div class="pure-u-1-3"><p>Thirds</p></div>
      <div class="pure-u-1-3"><p>Thirds</p></div>
      <div class="pure-u-1-3"><p>Thirds</p></div>
    </div>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${githubName}">Github</a></h2>
    </body>
    </html>
    `
}
