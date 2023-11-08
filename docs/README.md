# Whatsapp Web reverse engineering notes

The `/docs/unpacked` folder contains the unpacked version of the Whatsapp Web Client, included vendor code (probably external dependencies in their /node_modules).

The unpacked version of the Whatsapp Web Client was obtained using [webcrack](https://github.com/j4k0xb/webcrack)

```
  npm install -g webcrack
  curl https://web.whatsapp.com/app.61c035315a9306d08f6f.js | webcrack -o app -f
  curl https://web.whatsapp.com/main.66a4f76ac04b8f839c98.js | webcrack -o main
  curl https://web.whatsapp.com/main\~.b85625c758297bb4d118.js | webcrack -o main-chunk
  curl https://web.whatsapp.com/vendor1\~app.4802d7adf05a55e9c1dc.js | webcrack -o vendor -f
  curl https://web.whatsapp.com/vendors\~main.e054d9c9f15153b393bb.js | webcrack -o vendorsMain
  curl https://web.whatsapp.com/vendors\~main\~.4e64aa7c592312b70e21.js | webcrack -o vendors-main-chunk
```

webcrack is not able to process multiple bundles together, so in order to fix requires from one bundle to another, we've created a script that does that for us.

```
  node fix-requires.js
```

From there we have started renaming some variables and functions to make the code more readable.