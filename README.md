# Portfolio

My new Portfolio -v2 (development for [v1](https://github.com/saivishnu725/portfolio-v2023-10) was stopped because it sucks). _Dated 22-12-2023._

Heavily (downright copying the design without asking any sort of permission but given what I read, I don't think they would send any "legal goons" over it.) inspired by [Nicky Case](https://github.com/ncase)'s [website](https://ncase.me/).

## Hosting

1. Site is live on [theunconcernedape.me](https://theunconcernedape.me).
2. I maintain a _**VPS**_ from `DigitalOcean`.
3. `nginx` and `docker` work together to make this happen.

## how to check it out locally

### using the npm method

1. Install node dependencies

   ```bash
   npm install
   ```

2. a. Use nodemon to run the server

   ```bash
   nodemon
   ```

   b. Run the server manually

   ```bash
   node index.js
   ```

### using docker (recommended)

1. Have `docker` and `docker-compose` installed

   ```bash
   docker-compose up --build
   ```

Site is live at [localhost:3000](http://localhost:3000). Open it
in your preferred browser.

## Contributors

Nuh uh. No contributors for this one. You can provide issues tho.

## License

[GNU General Public License v2.0](https://choosealicense.com/licenses/gpl-2.0/)
