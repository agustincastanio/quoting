#### TO-DO (must have):
1. Finish Quote Items CRUD operations (with autocomplete)
2. Products/materials CRUD operations
3. Handle cotización endDate in user's timezone
4. Handle cotización referenceTotal when chaning items from quote
5. Unique link sharing per provider
6. User authentication with Auth0

---

#### TO-DO (nice to have):
1. Remove movie from URL path
2. Google maps address autocomplete
3. Use https://github.com/remaxjs/remax-swr instead of axios

---

#### Testing locally in Windows:

    Download and install MongoDB: https://www.mongodb.com/try/download/community

    Create Data directory:
        cd C:\
        md "\data\db"

    Start service from command line:
        "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="c:\data\db"

    Import backup from sample_data folder

    Start the project with "npm run dev"

    Go to http://localhost:3000 and verify it is working

    Verify PROD build is going to work with "npm run build"

---

#### PROD builds are hosted on:
. Vercel
. Github
. MongoDB Atlas
. Namecheap Domain registration
. Cloudflare DNS and CDN
. Auth0