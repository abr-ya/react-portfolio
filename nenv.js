const fs = require("fs");
// здесь необходимо перечислить ключи из файла ENV, а точнее - из ENV netlify
fs.writeFileSync("./.env", `REACT_APP_PROJECT_ID=${process.env.REACT_APP_PROJECT_ID}\n`);
fs.writeFileSync("./.env", `REACT_APP_TOKEN=${process.env.REACT_APP_TOKEN}\n`);
