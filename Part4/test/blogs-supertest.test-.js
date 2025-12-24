const { test, after, describe} = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')

const app = require('../index.jsx')
const api = supertest(app)


describe('Blogs API tests', () => {


    test.skip('4.8: Pruebas de Lista de Blogs, paso 1', async () => {
      const response = await api.get('/api/blogs')

      assert.strictEqual(response.body.length, 7)
    })

    test.skip('4.9 return fiel id', async  () => {

       const response = await api.get('/api/blogs')
        
       const blogs = response.body;

      expect(blogs).toBeInstanceOf(Array);

       blogs.forEach(blog => {
          expect(blog).toHaveProperty('id');
          expect(blog).not.toHaveProperty('_id');
        });

       
        console.log(response.body);

    }); 

    test('4.10 Incremet with POST',  async () => {

          const initialResponse = await api.get('/api/blogs')
          const initialBlogs = initialResponse.body

          const newBlog = {
            "title": "mi titulo..WWWW",
            "author": "mi author",
            "url": "mi url",
            "likes": 100
          }

          await api.post('/api/blogs')
            .send(newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)

          const getResponse = await api.get('/api/blogs')
          const updatedBlogs = getResponse.body

          //expect(updatedBlogs.length).toBe(initialBlogs.length + 1)
          assert.equal(updatedBlogs.length, initialBlogs.length + 1)

          const titles = updatedBlogs.map(blog => blog.title)
          //expect(titles).toContain(newBlog.title)
          assert.ok(titles.includes(newBlog.title));  
    }); 


    test('4.11 likes por defecto', async () => {
      const newBlog = {
        "title": "mi titulo..",
        "author": "mi author",
        "url": "mi url"
      }

      const response = await api.post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

      assert.equal(response.body.likes, 0)
      //expect(response.body.likes).toBe(0)
    });


    test ('4.12 campos obligatorios', async () => {
      const newBlog = {
        "author": "mi author",
        "likes": 5
      }
      await api.post('/api/blogs')
        .send(newBlog)
        .expect(400)
    });

    test('4.13 delete blog', async () => {
      const newBlog = {
        "title": "Blog to be deleted",
        "author": "mi author",
        "url": "mi url",
        "likes": 5
      }
      const postResponse = await api.delete('/api/blogs/69443b551eaa293add116887')
        .expect(204)
    })

})



after(async () => {
  await mongoose.connection.close()
}) 