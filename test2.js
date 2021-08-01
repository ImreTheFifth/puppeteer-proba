const puppeteer = require('puppeteer')

describe('Open ProntoTools Website', () => {
  let browser, page
  const url = 'https://outlook.live.com/owa/'
  
//ezt megcsinálná minden előtt
beforeEach (async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 100, devtools: false })
    page = await browser.newPage()
    await page.setViewport({ width: 1199, height: 900 })
  })

test('Send a mail', async () => {
    await page.goto(url)


    await page.waitForSelector('body > header > div > aside > div > nav > ul > li:nth-child(2) > a')
    await page.click('body > header > div > aside > div > nav > ul > li:nth-child(2) > a')
    
    await page.waitForSelector('#i0116')
    await page.click('#i0116')

    await page.keyboard.type('')
    await page.keyboard.press('Enter')
    
    await page.waitForSelector('#i0118')
    await page.keyboard.type('')
    await page.keyboard.press('Enter')
    
    await page.waitForSelector('#idBtn_Back')
    await page.click('#idBtn_Back')

    await page.waitForSelector('#id__7')
    await page.click('#id__7')
    
    await page.waitForSelector('#ReadingPaneContainerId > div > div > div > div._17WvdmDfhREFqBNvlLv75X > div._3Ot6xv41uIO58lh-I36wdt > div:nth-child(1) > div > div.mKl0Jm0rZWFpSjB8Sy4mA > div > div > div > div > div.ms-FocusZone.css-41 > div > div > input')
    
    await page.keyboard.type('')

    await page.waitForSelector('#TextField91')
    await page.keyboard.type('Hello world!')

    await page.waitForSelector('#id__113')
    await page.click('#id__113')

    await page.goto('https://outlook.live.com/mail/0/sentitems')

    await page.waitForSelector('#app > div > div.zZJcFiYp1GsQ-Zkcz02eC > div.mXEfuMleN9V2Rx6d6qvsu > div._2aSECY2_aC8BM-pa12gLyl > div > div > div.tQjtZGBXoedSUDzkcRzw5.css-45 > div._1mmhFz6xbEHFv6FfTUKPW2 > div > div.ms-FocusZone.css-41._1pt2s8kmwigdIS44ocdqXr._2u7Svn_BdDawtCwNsqEtQP._5NaMG57JmgzqTRAgcj0vf.customScrollBar.disableTextSelection > div > div:nth-child(3) > div:nth-child(5)')
    await page.click('#app > div > div.zZJcFiYp1GsQ-Zkcz02eC > div.mXEfuMleN9V2Rx6d6qvsu > div._2aSECY2_aC8BM-pa12gLyl > div > div > div.tQjtZGBXoedSUDzkcRzw5.css-45 > div._1mmhFz6xbEHFv6FfTUKPW2 > div > div.ms-FocusZone.css-41._1pt2s8kmwigdIS44ocdqXr._2u7Svn_BdDawtCwNsqEtQP._5NaMG57JmgzqTRAgcj0vf.customScrollBar.disableTextSelection > div > div:nth-child(3) > div:nth-child(5)')


    await page.waitForSelector('#AQAAAAAAAQABAAAAAyJsDwAAAAA\= > div > div > div > div._1bVZQZoqR8bXQm6sTkfm1W > div._26iAJd-QwDtChfxfbDGH7F > div > span')
    //ez lenne a csekkolás, de vhol elhal még mielőtt jönne
    await expect('#AQAAAAAAAQABAAAAAyJsDwAAAAA\= > div > div > div > div._1bVZQZoqR8bXQm6sTkfm1W > div._26iAJd-QwDtChfxfbDGH7F > div > span').toBe("hello")
  })

})