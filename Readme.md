# this is application source for cicd pipeline

## tips
- mariadb  
  ``` sh
  docker run -d -p 3306:3306 \
    --name mariadb \
    -e MARIADB_ROOT_PASSWORD=passw@rd\
    mariadb:10.4
  ```

## npx ssl insecure
NODE_TLS_REJECT_UNAUTHORIZED=0 npx prisma init

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlserver or sqlite.
3. Run prisma db pull to turn your database schema into a Prisma data model.
4. Run prisma generate to install Prisma Client. You can then start querying your database.

DATABASE_URL="mysql://root:passw@rd@127.0.0.1:3306/employees"