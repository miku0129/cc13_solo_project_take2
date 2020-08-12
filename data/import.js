require("dotenv").config();
const fs = require("fs");
const db = require("../server/knex.js");

(async () => {
  try {
    const addresses = JSON.parse(fs.readFileSync("./data/addresses.json"));
    for (const address of addresses) {
      const id = address.id;
      const name = address.name;
      const ad = address.ad;
      const word = address.word;
      const city = address.city;
      const postal_code = address.postal_code;

      const result = await db("addresses").insert({
        id,
        name,
        ad,
        word,
        city,
        postal_code,
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
