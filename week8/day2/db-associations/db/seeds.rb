author_1 = Author.create(name: 'J.K. Rowling')
author_2 = Author.create(name: 'Anne Rice')

book_1 = author_1.books.create(title: 'Harry Potter 1')
book_2 = author_1.books.create(title: 'Harry Potter 2')
book_3 = author_2.books.create(title: 'Exit to Eden')
book_4 = author_2.books.create(title: 'Vampire Chronicles')


book_1.tags.create(name: 'Fantasy')
book_2.tags.create(name: 'Magic')
book_3.tags.create(name: 'Comedy')
book_4.tags.create(name: 'Horror')
