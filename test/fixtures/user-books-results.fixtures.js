function makeUserBooksResults(){
    return [{ id: 1,
        user_id: 1,
        book_id: 1,
        book_status: 1,
        rating: 4,
        notes: 'jahkjsa',
        title: 'Demo 1',
        author: 'Author 1',
        isbn: '18761376',
        cover_i: '9823789742',
        oclc: '9178792' },
      { id: 2,
        user_id: 1,
        book_id: 2,
        book_status: 1,
        rating: 4,
        notes: 'jahkjsa',
        title: 'Demo 2',
        author: 'Author 2',
        isbn: '28762376',
        cover_i: '982389742',
        oclc: '9278792' },
      { id: 3,
        user_id: 1,
        book_id: 3,
        book_status: 1,
        rating: 4,
        notes: 'jahkjsa',
        title: 'Demo 3',
        author: 'Author 3',
        isbn: '38763376',
        cover_i: '9823739742',
        oclc: '9378792' }]
}

module.exports = { makeUserBooksResults }