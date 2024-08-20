# Hagia Software - Case

### This app uses the following languages, packages and frameworks

- Javascsript
- Typescript
- CSS
- HTML

- Client

  - React
  - Vite
  - i18next
  - shadcn/ui
  - tailwindcss
  - @tanstack/react-query
  - @trpc/client

- Server

  - Express
  - trpc
  - prisma
  - postgreSQL
  - Supabase
  - dotenv
  - puppeteer
  - cheerio
  - node-cron
  - jest

## Application's main concept

- This app uses webscraping method to get news from specified URL and saves the scrapped news into cloid postgresql database.
- App is not saving same news again to optimize storage.
- OpenAI api used for analyze news to make sentiment analysis over news.
- Cron Job created for getting news every 10 minutes. That scheduling can change.
- Since webpage loads images with lazy load, added a waiting process before scrapping. However, sometimes the timeout exceeds and some of news does include placeholder image URL.

## Development Flow

- Getting data from webpage
- Saving into store
- Saving process implemented skipping duplicates
- Used trpc for using same typescript declaration and models for monorepo. (server and client)
- shadcn used for designing client. Used default theme alongside with css variables.
- News get client with react-query and trpc.
- Added language changing for i18n

## Testing

- Applications main concepts
  - Getting news
  - Saving News
  - Analyzing onenews
  - Analyzing all news and stiring into postgresql

can be tested with the following command

```sh
    cd /server
    npm run test
```

## Running Application

- Make sure you have correct environment variables
- The environemnt files should be under root of /server/ directory
- .env file and [YOUR_NODE_ENV].env file will be required.
  - for example NODE_ENV === 'development' requires development.env
  - This provides changing environment variables for production, development and staging (if you have so).
- Then insatll node packages

```sh
    cd server
    npm install
```

```sh
    cd client
    npm install
```

### Run Server

```sh
    cd server # if you are not already in that directory
    npm run start
```

- If you changed any of the ts codes run

```sh
    npx tsc --watch
```

- then restart the server

### Run Client

```sh
    cd client
    npm run dev
```

### Opening Application

- If you do everything correct your application will be opened at
  http://localhost:5173

### Development Versions

- This app developed with
  - node@20.15.0
  - typescript@^5.5.4
