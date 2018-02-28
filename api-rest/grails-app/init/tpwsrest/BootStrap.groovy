package tpwsrest

import com.mbds.tpwsrest.Book
import com.mbds.tpwsrest.Library

class BootStrap {

    def init = { servletContext ->
        def lib1 = new Library(name: "Bibliothéque université de Nice",address:"Nice", yearCreated: 1991).save(flush:true, failOnError:true)
        lib1.addToBooks(new Book(name: "Troll de Troy", isbn: "x0000", author: "Soleil", releaseDate: new Date())).save(flush:true, failOnError:true)

        def lib2 = new Library(name: "Bibliothéque université de Toulouse",address:"Toulouse", yearCreated: 1991).save(flush:true, failOnError:true)
        lib2.addToBooks(new Book(name: "Troll de Troy", isbn: "x0000", author: "Soleil", releaseDate: new Date())).save(flush:true, failOnError:true)

        def lib3 = new Library(name: "Bibliothéque université de Nante",address:"Nante", yearCreated: 1991).save(flush:true, failOnError:true)
        lib3.addToBooks(new Book(name: "Troll de Troy", isbn: "x0000", author: "Soleil", releaseDate: new Date())).save(flush:true, failOnError:true)

        def lib4 = new Library(name: "Bibliothéque université de Rennes",address:"Rennes", yearCreated: 1991).save(flush:true, failOnError:true)
        lib4.addToBooks(new Book(name: "Troll de Troy", isbn: "x0000", author: "Soleil", releaseDate: new Date())).save(flush:true, failOnError:true)

        def lib5 = new Library(name: "Bibliothéque université de Paris",address:"Paris", yearCreated: 1991).save(flush:true, failOnError:true)
        lib5.addToBooks(new Book(name: "Troll de Troy", isbn: "x0000", author: "Soleil", releaseDate: new Date())).save(flush:true, failOnError:true)

        def lib6 = new Library(name: "Bibliothéque université de Brest",address:"Brest", yearCreated: 1991).save(flush:true, failOnError:true)
        lib6.addToBooks(new Book(name: "Troll de Troy", isbn: "x0000", author: "Soleil", releaseDate: new Date())).save(flush:true, failOnError:true)

        def lib7= new Library(name: "Bibliothéque université de Lyon",address:"Lyon", yearCreated: 1991).save(flush:true, failOnError:true)
        lib7.addToBooks(new Book(name: "Troll de Troy", isbn: "x0000", author: "Soleil", releaseDate: new Date())).save(flush:true, failOnError:true)

        def lib8 = new Library(name: "Bibliothéque université de Nancy",address:"Nancy", yearCreated: 1991).save(flush:true, failOnError:true)
        lib8.addToBooks(new Book(name: "Troll de Troy", isbn: "x0000", author: "Soleil", releaseDate: new Date())).save(flush:true, failOnError:true)

        def lib9 = new Library(name: "Bibliothéque université de Reims",address:"Reims", yearCreated: 1991).save(flush:true, failOnError:true)
        lib9.addToBooks(new Book(name: "Troll de Troy", isbn: "x0000", author: "Soleil", releaseDate: new Date())).save(flush:true, failOnError:true)

        def lib10 = new Library(name: "Bibliothéque université de Grenoble",address:"Grenoble", yearCreated: 1991).save(flush:true, failOnError:true)
        lib10.addToBooks(new Book(name: "Troll de Troy", isbn: "x0000", author: "Soleil", releaseDate: new Date())).save(flush:true, failOnError:true)
    }
    def destroy = {
    }
}
