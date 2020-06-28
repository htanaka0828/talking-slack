# talking-slack

Talkin and Scroll Comment on Browser!

## install

in server

```
npm ci
npm run start
```

## settings

### create slack bot
1. Create New APP in [slack](https://api.slack.com/apps).
2. And `Enabled Events`.
3. set `Request URL` for youre server domain.

### add slack bot user
1. click to `Add a bot user` in `Subscribe to Bot Events`, and create bot user.
2. click to `Add Bot User Event`.
3. add event by `message.channels`.

## uses

### in any page

1. open web developer console.
2. paste to code.

```javascript
(function(s, d, t){
    t = d.createElement('script');
    t.src = s + '/dist/script.js';
    d.body.appendChild(t);
})('YOURE_SERVER_DOMAIN', document);
```

### in brows page
1. open URL to `http://YOURE_SERVER_DOMAIN/`

## ライセンス
<a href="http://www.wtfpl.net/"><img src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png" width="80" height="15" alt="WTFPL" /></a>

```
        DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO.
```