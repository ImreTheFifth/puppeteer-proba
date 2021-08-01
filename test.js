//itt behúzod a puppeteer-t, hogy használni tudd
const puppeteer = require('puppeteer')

(async event => {
  //a link amire navigálni szeretnél
  const link = 'https://outlook.live.com/owa/'

  //létrehozod magát a browsert, ahol a puppeteert használod, a headless azt jelenti, hogy a képernyőn látszik-e, ami történik a teszt alatt
  const browser = await puppeteer.launch({ headless: false, slowMo: 100, devtools: false })

  try {
    //a browserben nyit egy új lapot
    const page = await browser.newPage()

    await page.setViewport({ width: 1199, height: 900 })

    //a fent megadott linkre navigálsz
    await page.goto(link)

    //a waitForSelector megvárja, míg a megadott cucc kirajzolódik
    await page.waitForSelector('body > header > div > aside > div > nav > ul > li:nth-child(2) > a')
    //itt rákattint a megadott selectorral meghatározott elemre
    await page.click('body > header > div > aside > div > nav > ul > li:nth-child(2) > a')
    
    //mail cím
    await page.waitForSelector('#i0116')
    await page.click('#i0116')
    //itt beírja a megadott szöveget, jelen esetbe ide írd a mail címet
    await page.keyboard.type('')
    //egy entert nyom
    await page.keyboard.press('Enter')
    

    //jelszó beírás
    await page.waitForSelector('#i0118')
    //ide a jelszó kell a '' közé
    await page.keyboard.type('')
    await page.keyboard.press('Enter')
    
    //bejelentkezve marad => nem
    await page.waitForSelector('#idBtn_Back')
    await page.click('#idBtn_Back')

    //új mail
    await page.waitForSelector('#id__7')
    await page.click('#id__7')
    
    await page.waitForSelector('#ReadingPaneContainerId > div > div > div > div._17WvdmDfhREFqBNvlLv75X > div._3Ot6xv41uIO58lh-I36wdt > div:nth-child(1) > div > div.mKl0Jm0rZWFpSjB8Sy4mA > div > div > div > div > div.ms-FocusZone.css-41 > div > div > input')
    //ide jön a mail cím
    await page.keyboard.type('')

    //ez a subject
    await page.waitForSelector('#TextField91')
    await page.keyboard.type('Hello world!')

    //küldés
    await page.waitForSelector('#id__113')
    await page.click('#id__113')

    //elküldötthöz megy
    await page.goto('https://outlook.live.com/mail/0/sentitems')
    await page.waitForSelector('#AQAAAAAAAQABAAAAAyJsDwAAAAA\= > div > div > div > div._1bVZQZoqR8bXQm6sTkfm1W > div._26iAJd-QwDtChfxfbDGH7F > div > span')
    //ez lenne vmi csekkolás, de így nem tudtam teljesen munkára bírni
    await page.waitForFunction(
      'document.querySelector("body").innerText.includes("NBA")',
    )
    //bezárja a dolgokat
    await page.close()
    await browser.close()
  } catch (error) {
    console.log(error)
    //await browser.close()
  }
})()
