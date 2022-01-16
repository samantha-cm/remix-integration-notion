export const validationTypesBlocks = (arr) => {
  const validation = arr.map(({ heading_2, id, image, paragraph, type }) =>
    type === "heading_2" ? (
      <h2 style={{ color: "red" }} key={id}>
        {heading_2.text[0].plain_text}
      </h2>
    ) : type === "image" ? (
      <img key={id} src={image.file.url} alt={id} width={200} />
    ) : type === "paragraph" && paragraph.text.length > 0 ? (
      <p key={id}>{paragraph.text[0].plain_text}</p>
    ) : type === "paragraph" && paragraph.text.length === 0 ? (
      <br key={id} />
    ) : null
  );
  return validation;
};
