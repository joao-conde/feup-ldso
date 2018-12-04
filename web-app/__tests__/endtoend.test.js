const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect

describe('test duckduckgo search results', () => {
    it('should find the nightmare github link first', done => {
  
      function callback() {
        const nightmare = Nightmare({waitTimeout: 10000})
        nightmare
          .goto('https://duckduckgo.com')
          .type('#search_form_input_homepage', 'github nightmare')
          .click('#search_button_homepage')
          .wait('#links .result__a')
          .evaluate(() => document.querySelector('#links .result__a').href)
          .end()
          .then(link => {
            expect(link).to.equal('https://github.com/segmentio/nightmare')
            done();
          })
      }

      callback();
    })

  })