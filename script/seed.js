/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const { User, Passage } = require('../server/db/models')
const ipsum = require('lorem-ipsum')
const contentIpsumObj = {
  count: 3                     // Number of words, sentences, or paragraphs to generate.
  , units: 'paragraphs'            // Generate words, sentences, or paragraphs.
  , sentenceLowerBound: 5         // Minimum words per sentence.
  , sentenceUpperBound: 15        // Maximum words per sentence.
  , paragraphLowerBound: 1        // Minimum sentences per paragraph.
  , paragraphUpperBound: 5        // Maximum sentences per paragraph.
  , format: 'plain'               // Plain text or html
  //, words: ['ad', 'dolor', ... ]  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.
  , random: Math.random           // A PRNG function. Uses Math.random by default
  // , suffix: EOL                   // The character to insert between paragraphs. Defaults to default EOL for your OS.
}
const titleIpsumObj = {
  count: 3
  , units: 'words'
  , format: 'plain'
  , random: Math.random
}

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'murphy@email.com', password: '123' })
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  await seedPassages()
}

async function seedPassages() {
  console.log('seeding passages')

  const promiseArray = []
  for (let i = 0; i < 50; i++) {
    promiseArray.push(Passage.create(
      {
        title: ipsum(titleIpsumObj)
        , content: ipsum(contentIpsumObj)
        , isPublic: false
      }))
    promiseArray.push(Passage.create(
      {
        title: ipsum(titleIpsumObj)
        , content: ipsum(contentIpsumObj)
        , isPublic: true
      }))
  }
  const done = await Promise.all(promiseArray)
  console.log(`Seeded ${done.length} Passages`)

}
// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
