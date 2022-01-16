import { useLoaderData, Link, Outlet } from "remix";
import notion from "~/config/notion_clien.server";

export const loader = async () => {
  //const users = await notion.users.list({});
  const myPage = await notion.databases.query({
    database_id: process.env.NOTION_DB,
  });
  return { myPage };
};

export default () => {
  const data = useLoaderData();
  const pages = data.myPage.results;
  // console.log(pages);
  return (
    <div>
      <h1>Hola mundo</h1>
      {pages.map((page) => {
        return (
          <Link key={page.id} to={`/pages/${page.id}`}>
            {page.properties.Name.title[0].plain_text}
          </Link>
        );
      })}
      <Outlet />
    </div>
  );
};
