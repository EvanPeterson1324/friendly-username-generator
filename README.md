# Friendly Username Generator
Tired of accidentally generating explicit usernames? Well fear no longer. This module will put your boss at ease by generating non-explicit usernames.

```js
const generateUsername = require('friendly-username-generator');

// Structure: (adjective-animal<random 3-digit number>)
generateUsername(); // --> "yellow-zebra596" 
```

### Options
You may pass options to `generateUsername`

```js
const options = {
    useHyphen: Boolean,         // if false, a hyphen will NOT be used. (True by default)
    useRandomNumber: Boolean    // if false, a random number will NOT be appended to the end of the random username. (True by default)
}
```

### Other Perks
- Zero dependancies! This module will use only native code. (Except for jest so I can write tests)
- Frequent updates to word lists.
