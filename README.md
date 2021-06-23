# Friendly Username Generator
Tired of accidentally generating explicit usernames? Well fear no longer. This module will put your boss at ease by generating non-explicit usernames.

```js
const generateUsername = require('friendly-username-generator');

// Structure: adjective + a dash + animal + number from 0 to 999
generateUsername(); // --> "yellow-zebra596"
```

### Other Perks
- Zero dependancies! This module will use only native code. (Except for jest so I can write tests)
- Frequent updates to word lists.
