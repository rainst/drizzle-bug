# ISSUE WITH INTROSPECTING SQLITE DATABASE

After a little more than a year of inactivity I started working again on a personal project and realised that with the most recent versions of drizzle orm and kit it fails pulling (introspecting) the sqlite database.
To help solve the issue I have created this repository.

`drizzle-orm@~0.34.0` and `drizzle-kit@~0.25.0` are the most recent versions that still work fine on my database, when I run `orm-kit pull`.

If I update the packages to the next available minor versions `drizzle-orm@~0.35.0` and `drizzle-kit@~0.26.0` or the latest currently available I end up with this error:

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

- Run `yarn pull` to reproduce the error. ❌

- Run `yarn downgrade` to install an older versions of the packages and then `yarn pull`, the database will be introspected without errors. ✅

- Run `yarn downgrade:old` to install an older version of the packages that still use the old config based on driver rather than dialect and run `yarn pull:old` to introspect successfully. ✅

- Run `yarn check-latest` to install the latest versions of drizzle orm and kit and run a pull to see if the bug has been fixed in the latest version available. 🔍

## WHAT I AM TRYING TO DO

The database contains raw data extracted from Microsoft Flight Simulator 2020 (airports, navigation data and so on..), that I use to run this website: https://msfs.breincorporation.com/.

Currently I manually extract the Airport table and shave off the colums I don't need, I was trying to automate this step with the help of drizzle.
