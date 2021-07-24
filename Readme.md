# this is application source for cicd pipeline

## tips

- mariadb
  ```sh
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

docker run -d \
 -p 4000:3000 \
 -v $(pwd)/env.json:/sam-node/config/env.json \
 --name=sam-node \
 --link mariadb:mariadb \
 nogada/sam-node:latest

aws eks pipeline buildspec 권한처리
https://twofootdog.tistory.com/73

## API Request Validation - YUP+i18next

- yup : https://github.com/jquense/yup
- 스키마 작성 방법 : https://github.com/jquense/yup#usage
- validation은 해당 controller파일 에서 스키마 적성및 실행 하는 방식입니다.
- sample.controller.js 에 관련 코드 확인 가능합니다.

- 사용예

  - Controller 상단에 스키마 추가

  ```js
  const valiationSchema = (t) => ({
    createData: yup.object().shape({
      title: yup
        .string()
        .required(t("validation.required", { name: t("title") })),
      body: yup
        .string()
        .required(t("validation.required", { name: t("body") })),
    }),
  });
  ```

  - Controller 해당 함수에서 validate 실행

  ```js
  exports.createData = async (req, res, next) => {
    try {
      const { title, body } = req.body;

      /**
       * 상단에 정의한 스키마의 맞는 validate 를 실행한다.
       */
      await valiationSchema(req.t).createData.validate({ title, body }); //<--- NEW

      let result = await sampleService.createData(title, body);

      return res.json(result);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
  ```

## 다국어 적용 - i18next

- i18next : www.i18next.com
- 언어별 리소스 폴더 : src/resources/locales
- api요청시 header 및 querystring 을 사용하여 언어 감지함.

  - header : accept-language
  - querystring : lng
    - ex) http://localhost:3000/i18n?lang=ko

- 적용 코드

```js
// use i18n
i18next
  .use(i18nextBackend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: __dirname + "/resources/locales/{{lng}}/{{ns}}.json",
      addPath: __dirname + "/resources/locales/{{lng}}/{{ns}}.missing.json",
    },
    fallbackLng: "en",
    load: "languageOnly",
    saveMissing: true,
    detection: { lookupHeader: "accept-language", lookupQuerystring: "lng" },
  });

app.use(i18nextMiddleware.handle(i18next));
```
