import { useLoaderData } from "remix";
import notion from "~/config/notion_clien.server";
import { validationTypesBlocks } from "~/utils";
export const loader = async ({ params }) => {
  console.log(params);
  //To Do's generar una funcion para retornar dependiendo cada tipo de dato -> validationTypesBlocks
  const result = await notion.blocks.children.list({ block_id: params.pageId });
  console.log(result);
  return { result };
};

export default () => {
  const data = useLoaderData();
  //   console.log(data);
  const content = data.result.results;
  const result = validationTypesBlocks(content);

  return <div>One page{result}</div>;
};
