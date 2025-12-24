const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper.jsx')
const { getActiveResourcesInfo, listenerCount } = require('node:process')




const blogs = [

    {
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
    },
    {
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
    },
    {
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
    },
    {
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10,
    },
    {
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0,
    },
    {
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 2,
    }  


]


describe('Mis pruebas de test con Node --test', () => {

        test('el numero total de likes debe ser 12', () => {
        const blogs = []

        const result = listHelper.dummy(blogs)

        assert.strictEqual(result, 1)
        })

})  
 


describe('total likes', () => {

    test('Prueba de totalLikes con varios blogs', () => {
        const result = listHelper.totalLikes(blogs)
        assert.equal(result, 36)
    })

    test('Si le envio una lista vacía tiene que devolver 0', () => {
        const result = listHelper.totalLikes([])
        assert.equal(result, 0)
    })

    test('Si le envio un valor null tiene que devolver 0', () => {
        const result = listHelper.totalLikes(null)
        assert.equal(result, 0)
    })

})

 

describe('Test for Blogs', () => {

    test('Favorite blog de una lista con varios blogs', () => {
        
        const result = listHelper.favoriteBlog(blogs)

        assert.deepStrictEqual(result, 
            {
                title: "Canonical string reduction",
                author: "Edsger W. Dijkstra",
                likes: 12,
            }
        )
       }
    )

    test('Author with most blogs',() =>{

        const result = listHelper.mostBlogs(blogs)

        assert.deepStrictEqual(result, 
                {
                        author: "Robert C. Martin",
                        blogs:3, 
                }
             )
    })



    test('Author with most likes',() =>{

        const result = listHelper.mostLikes(blogs)

        assert.deepStrictEqual(result,
                {
                    author: "Edsger W. Dijkstra",
                    likes: 17,
                }
            )
        })


})


