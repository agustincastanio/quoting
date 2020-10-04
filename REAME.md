
3. handle cotización endDate
4. handle cotización referenceTotal (and different currencies)
5. start proveedor side
6. fix serverless cold starts
7. remove movie from URL path
8. google maps address autocomplete
8. use https://github.com/remaxjs/remax-swr instead of axios


Testing locally in Windows:

MongoDB
    Download: https://www.mongodb.com/try/download/community

    Create Data directory:
        cd C:\
        md "\data\db"

    Start service from command line:
        "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="c:\data\db"
