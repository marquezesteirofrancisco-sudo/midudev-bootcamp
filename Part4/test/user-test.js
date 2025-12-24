const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../index.jsx');
const api = supertest(app);
const User = require('../models/user.jsx');

const { test, describe } = require('node:test')

beforeEach(async () => {
  await User.deleteMany({});
});

describe('Crear un nuevo usuario', () => {
    
  it('Crear un usuario válido', async () => {
    const nuevoUsuario = {
      username: 'usuarioValido',
      name: 'Usuario Válido',
      password: 'password123'
    };

    const response = await api.post('/api/users')
      .send(nuevoUsuario)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    expect(response.body.username).toBe(nuevoUsuario.username);
  });

  it('Crear un usuario con nombre de usuario demasiado corto', async () => {
    const nuevoUsuario = {
      username: 'us',
      name: 'Usuario Inválido',
      password: 'password123'
    };

    const response = await api.post('/api/users')
      .send(nuevoUsuario)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(response.body.error).toContain('username');
  });

  it('Crear un usuario con contraseña demasiado corta', async () => {
    const nuevoUsuario = {
      username: 'usuarioValido',
      name: 'Usuario Inválido',
      password: '123'
    };

    const response = await api.post('/api/users')
      .send(nuevoUsuario)
      .expect(401)
      .expect('Content-Type', /application\/json/);

    expect(response.body.error).toContain('password');
  });

  it('Crear un usuario con nombre de usuario duplicado', async () => {
    const nuevoUsuario = {
      username: 'usuarioValido',
      name: 'Usuario Válido',
      password: 'password123'
    };

    await api.post('/api/users')
      .send(nuevoUsuario)
      .expect(201);

    const response = await api.post('/api/users')
      .send(nuevoUsuario)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(response.body.error).toContain('username');
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});