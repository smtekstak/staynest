// mongo-init.js — runs once when the container is first created
// Creates the application database user with scoped credentials

db = db.getSiblingDB('staynest');

db.createUser({
  user: 'staynest_user',
  pwd: 'staynest_pass',
  roles: [
    { role: 'readWrite', db: 'staynest' }
  ]
});

print('✅ MongoDB: staynest_user created for staynest database');
