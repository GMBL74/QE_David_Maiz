function fn() {
  // soporte multi-entorno: mvn test -Dkarate.env=<entorno>
  var env = karate.env || 'local';
  karate.log('karate.env =', env);

  var urls = {
    local: 'http://localhost:3000',
    qa: 'https://serverest.dev'
  };

  var config = {
    baseUrl: urls[env]
  };

  karate.configure('connectTimeout', 10000);
  karate.configure('readTimeout', 10000);

  return config;
}