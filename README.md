(1). ข้อมูลที่เกี่ยวข้องกับ Database

![123 drawio](https://github.com/TeerapatKC/Getting-to-know-Strapi/assets/91894399/004fac70-810f-43cb-b079-139240f9fb39)

อธิบาย (จะมี 3 ตาราง) คือตาราง 
           1.login_history 
             มี attribute คือ login_datetime,user_id
           2.profile_user
              attribute is user_id,first_name,last_name,email_address,active,signup_datetime,profile_image
           3.site_post
             attribute is post_id,user_id,post_datetime,post_text
       (relational ความสัมพันธ์)
            1.login_history มีความสัมพันธ์เป็น many to many กับตาราง profile_user
            2.profile_user มีความสัมพันธ์เป็น one to many กับตาราง site_post
(2) ใน strapi การสร้างตาราง การกำหนดความสัมพันธ์ การเพิ่มข้อมูลในตาราง
(3) ทดสอบเรียกใช้APIโดยใช้ postman
(4) เลือกส่วนของข้อมูลจาก response จาก API ที่ต้องการ โดยใช้ graphQL
       




# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
# Getting-to-know-Strapi
# Getting-to-know-Strapi
# Getting-to-know-Strapi
