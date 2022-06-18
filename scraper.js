const puppeteer = require("puppeteer");

const scraper = async function () {
    const browser = await puppeteer.launch({ headless: false });
    
    const page = await browser.newPage();
    
    await page.goto("https://adopt.spca.bc.ca/pets/");
    
    let element = await page.$(".ajax-load-more-query-button")
    while (element !== null) {
        console.log(element)
        let button = await page.waitForSelector('.ajax-load-more-query-button')
        await page.click(button);
        await page.waitForSelector('.ajax-load-more-query-button')
        element = await page.$(".ajax-load-more-query-button")
    }
    
    await page.close();
    
    await browser.close();

    return
}


module.exports = {
    scraper: scraper,
};
