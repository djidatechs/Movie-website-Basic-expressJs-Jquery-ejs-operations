const interfaceFilms = [] ; 
    const interfaceSeries = [] ; 
    const interfaceMasrh = [] ;

    for (var i = 0 ; i < 14 ; i++) {
    interfaceFilms.push(searching[Math.floor(Math.random()*searching.length)])}
    
    for (var i = 0 ; i < 14 ; i++) {
        interfaceSeries.push(searching[Math.floor(Math.random()*searching.length)])}
    
    for (var i = 0 ; i < 14 ; i++) {
        interfaceMasrh.push(searching[Math.floor(Math.random()*searching.length)])}
  return res.render('home' , {interfaceFilms ,interfaceSeries ,interfaceMasrh });