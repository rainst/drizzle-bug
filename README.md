# ISSUE WITH INTROSPECTING SQLITE DATABASE

I picked up this project after about a year and realised that with the most recent versions of drizzle orm and kit it fails pulling (introspecting) the sqlite database.

If I run `pull` (`introspect`) using `drizzle-orm@~0.27.0` and `drizzle-kit@~0.19.0` it works without issues.


This is the error I get with the latest versions:
```
Pulling from ['public'] list of schemas

[⣷] 0 tables fetching
[⣷] 0 columns fetching
[⣷] 0 indexes fetching
[⣷] 0 foreign keys fetching
[⣷] 0 policies fetching
[⣷] 0 check constraints fetching
[⣷] 0 views fetching
SqliteError: no such column: "%3.3f" - should this be a string literal in single-quotes?
    at Object.query (/Users/(...)/projects/drizzle-bug/node_modules/drizzle-kit/bin.cjs:79216:53)
    at fromDatabase3 (/Users/(...)/projects/drizzle-bug/node_modules/drizzle-kit/bin.cjs:38587:32)
    at introspectSqlite (/Users/(...)/projects/drizzle-bug/node_modules/drizzle-kit/bin.cjs:85132:9)
    at async Object.handler (/Users/(...)/projects/drizzle-bug/node_modules/drizzle-kit/bin.cjs:92395:9)
    at async run (/Users/(...)/projects/drizzle-bug/node_modules/drizzle-kit/bin.cjs:90501:7) {
  code: 'SQLITE_ERROR'
}
```

## SCRIPTS FOR REPRODUCING AND TESTING
Run `yarn pull` to reproduce the error.

Run `yarn downgrade` to install older versions of drizzle orm and kit and then `yarn pull:old`, the database will be introspected without errors.

Run `yarn latest` to go back and install the latest versions of drizzle orm and kit.

## WHAT I AM TRYING TO DO

The database contains raw data extracted from Microsoft Flight Simulator 2020 (airports, navigation data and so on..), that I use to run this website: https://msfs.breincorporation.com/. 

Currently I manually extract the Airport table and shave off the colums I don't need, I was trying to automate this step with the help of drizzle.