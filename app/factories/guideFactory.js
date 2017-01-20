app.factory('guideFactory',function ($http) {
  let books =[]
  return {
        getThebooks: () => {
          return $http
            .get('/data/guides.json')
            .then((response) => {
              return books = response.data.guides

            })
          }

  }

})
