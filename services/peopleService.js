const people = [{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz"},{"id":2,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv"},{"id":3,"name":"Clementine Bauch","username":"Samantha","email":"Nathan@yesenia.net"},{"id":4,"name":"Patricia Lebsack","username":"Karianne","email":"Julianne.OConner@kory.org"},{"id":5,"name":"Chelsey Dietrich","username":"Kamren","email":"Lucio_Hettinger@annie.ca"},{"id":6,"name":"Mrs. Dennis Schulist","username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info"},{"id":7,"name":"Kurtis Weissnat","username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz"},{"id":8,"name":"Nicholas Runolfsdottir V","username":"Maxime_Nienow","email":"Sherwood@rosamond.me"},{"id":9,"name":"Glenna Reichert","username":"Delphine","email":"Chaim_McDermott@dana.io"},{"id":10,"name":"Clementina DuBuque","username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz"}]

const getPeople = (req, res) => {
  res.status(200).json({
    message: 'success',
    data: people
  });
};

const getPeopleById = (req, res) => {
  const {id} = req.params

  const result = people.find((row) => row.id == id)

  res.status(200).json({
    message: 'success',
    data: result
  });
}

const createData = (req, res) => {
  const payload = req.body
  people.push(payload);

  res.status(200).json({
    message: 'success',
    data: people
  });
}

const updateData = (req, res) => {
  const {id} = req.params
  const payload = req.body

  people[id] = payload
  res.status(200).json({
    message: 'success',
    data: people
  });
}

const deleteData = (req, res) => {
  const {id} = req.params

  res.status(200).json({
    message: 'success',
    data: people.splice(1, id)
  });
}

module.exports = {
  getPeople,
  getPeopleById,
  createData,
  updateData,
  deleteData
};
